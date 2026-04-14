import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type } = body;

    // Get IP from headers
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Generate session ID from IP + user agent (simple fingerprint)
    const ua = body.userAgent || request.headers.get("user-agent") || "";
    const sessionId = Buffer.from(`${ip}-${ua}`).toString("base64").slice(0, 32);

    if (type === "pageview") {
      db.prepare(
        `INSERT INTO pageviews (page, referrer, user_agent, ip, session_id)
         VALUES (?, ?, ?, ?, ?)`
      ).run(body.page, body.referrer || null, ua, ip, sessionId);
    } else if (type === "click") {
      db.prepare(
        `INSERT INTO clicks (page, element, text, href, session_id)
         VALUES (?, ?, ?, ?, ?)`
      ).run(body.page, body.element, body.text, body.href, sessionId);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Analytics tracking error:", error);
    return NextResponse.json({ error: "Failed to track" }, { status: 500 });
  }
}
