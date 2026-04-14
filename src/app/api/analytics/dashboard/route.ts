import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import db from "@/lib/db";

export async function GET(request: NextRequest) {
  // Check auth
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const days = parseInt(searchParams.get("days") || "30");

  const since = new Date();
  since.setDate(since.getDate() - days);
  const sinceStr = since.toISOString();

  // Total pageviews
  const totalPageviews = db
    .prepare("SELECT COUNT(*) as count FROM pageviews WHERE created_at >= ?")
    .get(sinceStr) as { count: number };

  // Unique visitors (unique session_ids)
  const uniqueVisitors = db
    .prepare(
      "SELECT COUNT(DISTINCT session_id) as count FROM pageviews WHERE created_at >= ?"
    )
    .get(sinceStr) as { count: number };

  // Total clicks
  const totalClicks = db
    .prepare("SELECT COUNT(*) as count FROM clicks WHERE created_at >= ?")
    .get(sinceStr) as { count: number };

  // Pageviews by page
  const topPages = db
    .prepare(
      `SELECT page, COUNT(*) as views
       FROM pageviews WHERE created_at >= ?
       GROUP BY page ORDER BY views DESC LIMIT 10`
    )
    .all(sinceStr) as { page: string; views: number }[];

  // Clicks by element text
  const topClicks = db
    .prepare(
      `SELECT text, href, COUNT(*) as clicks
       FROM clicks WHERE created_at >= ?
       GROUP BY text, href ORDER BY clicks DESC LIMIT 10`
    )
    .all(sinceStr) as { text: string; href: string; clicks: number }[];

  // Pageviews per day (for chart)
  const dailyViews = db
    .prepare(
      `SELECT DATE(created_at) as date, COUNT(*) as views
       FROM pageviews WHERE created_at >= ?
       GROUP BY DATE(created_at) ORDER BY date`
    )
    .all(sinceStr) as { date: string; views: number }[];

  // Daily clicks
  const dailyClicks = db
    .prepare(
      `SELECT DATE(created_at) as date, COUNT(*) as clicks
       FROM clicks WHERE created_at >= ?
       GROUP BY DATE(created_at) ORDER BY date`
    )
    .all(sinceStr) as { date: string; clicks: number }[];

  // Referrers
  const topReferrers = db
    .prepare(
      `SELECT referrer, COUNT(*) as count
       FROM pageviews WHERE created_at >= ? AND referrer IS NOT NULL AND referrer != ''
       GROUP BY referrer ORDER BY count DESC LIMIT 10`
    )
    .all(sinceStr) as { referrer: string; count: number }[];

  return NextResponse.json({
    overview: {
      totalPageviews: totalPageviews.count,
      uniqueVisitors: uniqueVisitors.count,
      totalClicks: totalClicks.count,
    },
    topPages,
    topClicks,
    dailyViews,
    dailyClicks,
    topReferrers,
  });
}
