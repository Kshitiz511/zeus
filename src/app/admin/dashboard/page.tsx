"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import {
  Eye,
  MousePointerClick,
  Users,
  TrendingUp,
  LogOut,
  RefreshCw,
  Calendar,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

interface DashboardData {
  overview: {
    totalPageviews: number;
    uniqueVisitors: number;
    totalClicks: number;
  };
  topPages: { page: string; views: number }[];
  topClicks: { text: string; href: string; clicks: number }[];
  dailyViews: { date: string; views: number }[];
  dailyClicks: { date: string; clicks: number }[];
  topReferrers: { referrer: string; count: number }[];
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/analytics/dashboard?days=${days}`);
      if (res.ok) {
        setData(await res.json());
      }
    } catch (err) {
      console.error("Failed to fetch analytics:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (status === "authenticated") fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, days]);

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-zeus-gold">Loading...</div>
      </div>
    );
  }

  // Merge daily views & clicks for combined chart
  const chartData = data?.dailyViews.map((dv) => ({
    date: dv.date,
    views: dv.views,
    clicks:
      data.dailyClicks.find((dc) => dc.date === dv.date)?.clicks || 0,
  })) || [];

  return (
    <div className="min-h-screen bg-zeus-midnight">
      {/* Admin Header */}
      <div className="border-b border-zeus-card-border bg-zeus-navy/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-zeus-gold to-zeus-gold-dark flex items-center justify-center">
              <span className="text-zeus-midnight font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>Z</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-zeus-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Analytics Dashboard
              </h1>
              <p className="text-xs text-zeus-text-secondary">
                Welcome, {session?.user?.name || session?.user?.email}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={fetchData} className="p-2 text-zeus-muted hover:text-zeus-gold transition-colors" title="Refresh">
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            </button>
            <select
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="bg-zeus-midnight border border-zeus-card-border rounded-lg px-3 py-1.5 text-sm text-zeus-white-soft focus:outline-none focus:border-zeus-gold/40"
            >
              <option value={7}>Last 7 days</option>
              <option value={30}>Last 30 days</option>
              <option value={90}>Last 90 days</option>
              <option value={365}>Last year</option>
            </select>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-zeus-muted hover:text-zeus-danger transition-colors"
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              label: "Total Pageviews",
              value: data?.overview.totalPageviews || 0,
              icon: Eye,
              color: "from-blue-500/20 to-blue-600/10",
              iconColor: "text-blue-400",
            },
            {
              label: "Unique Visitors",
              value: data?.overview.uniqueVisitors || 0,
              icon: Users,
              color: "from-zeus-gold/20 to-zeus-gold/5",
              iconColor: "text-zeus-gold",
            },
            {
              label: "Total Clicks",
              value: data?.overview.totalClicks || 0,
              icon: MousePointerClick,
              color: "from-emerald-500/20 to-emerald-600/10",
              iconColor: "text-emerald-400",
            },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                  <card.icon size={22} className={card.iconColor} />
                </div>
                <TrendingUp size={16} className="text-zeus-success" />
              </div>
              <p className="text-3xl font-bold text-zeus-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                {card.value.toLocaleString()}
              </p>
              <p className="text-sm text-zeus-text-secondary">{card.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Traffic Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg text-zeus-white font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Traffic Overview
              </h3>
              <p className="text-xs text-zeus-text-secondary mt-1">
                <Calendar size={12} className="inline mr-1" />
                Last {days} days
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-zeus-gold" />
                Views
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                Clicks
              </span>
            </div>
          </div>

          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="gradViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4A853" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#D4A853" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradClicks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1A2742" />
                <XAxis
                  dataKey="date"
                  stroke="#64748B"
                  fontSize={11}
                  tickFormatter={(v) =>
                    new Date(v).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                />
                <YAxis stroke="#64748B" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    background: "#111B2E",
                    border: "1px solid rgba(212,168,83,0.2)",
                    borderRadius: "8px",
                    color: "#F8FAFC",
                    fontSize: "12px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="#D4A853"
                  fill="url(#gradViews)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="clicks"
                  stroke="#34d399"
                  fill="url(#gradClicks)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center text-zeus-muted text-sm">
              No data available for this period
            </div>
          )}
        </motion.div>

        {/* Bottom grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6"
          >
            <h3 className="text-sm font-semibold text-zeus-white mb-4 flex items-center gap-2">
              <Globe size={16} className="text-zeus-gold" />
              Top Pages
            </h3>
            {data?.topPages.length ? (
              <div className="space-y-3">
                {data.topPages.map((p) => (
                  <div key={p.page} className="flex items-center justify-between">
                    <span className="text-sm text-zeus-white-soft truncate mr-4">
                      {p.page}
                    </span>
                    <span className="text-xs text-zeus-gold font-medium whitespace-nowrap">
                      {p.views} views
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-zeus-muted">No data yet</p>
            )}
          </motion.div>

          {/* Top Clicks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-6"
          >
            <h3 className="text-sm font-semibold text-zeus-white mb-4 flex items-center gap-2">
              <MousePointerClick size={16} className="text-emerald-400" />
              Top Clicked Elements
            </h3>
            {data?.topClicks.length ? (
              <div className="space-y-3">
                {data.topClicks.map((c, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-zeus-white-soft truncate mr-4">
                      {c.text || c.href || "Unknown"}
                    </span>
                    <span className="text-xs text-emerald-400 font-medium whitespace-nowrap">
                      {c.clicks} clicks
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-zeus-muted">No data yet</p>
            )}
          </motion.div>

          {/* Referrers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-6"
          >
            <h3 className="text-sm font-semibold text-zeus-white mb-4 flex items-center gap-2">
              <ArrowUpRight size={16} className="text-blue-400" />
              Top Referrers
            </h3>
            {data?.topReferrers.length ? (
              <div className="space-y-3">
                {data.topReferrers.map((r) => (
                  <div key={r.referrer} className="flex items-center justify-between">
                    <span className="text-sm text-zeus-white-soft truncate mr-4">
                      {r.referrer}
                    </span>
                    <span className="text-xs text-blue-400 font-medium whitespace-nowrap">
                      {r.count}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-zeus-muted">No data yet</p>
            )}
          </motion.div>
        </div>

        {/* Page Views Bar Chart */}
        {data?.topPages && data.topPages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg text-zeus-white font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Page Views Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data.topPages}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1A2742" />
                <XAxis dataKey="page" stroke="#64748B" fontSize={11} />
                <YAxis stroke="#64748B" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    background: "#111B2E",
                    border: "1px solid rgba(212,168,83,0.2)",
                    borderRadius: "8px",
                    color: "#F8FAFC",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="views" fill="#D4A853" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </div>
    </div>
  );
}
