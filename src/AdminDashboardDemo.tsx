import { AdminDashboard } from "@/ui/components/admin";
import type { ActivityItem, AdminMetric, BusinessSubmission, SidebarItem, SystemStatusEntry } from "@/ui/components/types/admin.types";
import { AlertTriangle, Building2, Clock, Flag, Gem, TrendingUp, UserPlus } from "lucide-react";

const sidebar: SidebarItem[] = [
  { id: "overview", label: "Overview", icon: Gem, section: "Management" },
  { id: "businesses", label: "Businesses", icon: Building2, section: "Management", badgeCount: 8 },
  { id: "submissions", label: "Submissions", icon: Clock, section: "Moderation", badgeCount: 23 },
  { id: "flags", label: "Flags", icon: Flag, section: "Moderation", badgeCount: 3 },
  { id: "insights", label: "Insights", icon: TrendingUp, section: "Insights" },
];

const metrics: AdminMetric[] = [
  { id: "pending", label: "Pending Approvals", value: 23, trend: { direction: "up", percent: 8 }, icon: Clock, variant: "orange" },
  { id: "active", label: "Active Businesses", value: "1,247", trend: { direction: "up", percent: 2.1 }, icon: Building2, variant: "blue" },
  { id: "week", label: "New This Week", value: 89, trend: { direction: "flat" }, icon: UserPlus, variant: "green" },
  { id: "issues", label: "Issues Reported", value: 3, trend: { direction: "down", percent: 12 }, icon: AlertTriangle, variant: "red" },
];

const submissions: BusinessSubmission[] = [
  { id: "1", name: "The Roasted Bean", category: "Restaurants", location: "Seattle, WA", avatarUrl: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=160&q=80&auto=format&fit=crop", tags: ["Cafe", "WiFi", "Open Late"], submittedAt: new Date().toISOString(), owner: "Jordan" },
  { id: "2", name: "Bright Smile Dental", category: "Services", location: "Austin, TX", avatarUrl: "https://images.unsplash.com/photo-1588771930296-88c2cb03f388?w=160&q=80&auto=format&fit=crop", tags: ["Dental", "Family", "Insurance"], submittedAt: new Date().toISOString(), owner: "Casey" },
  { id: "3", name: "Style & Grace Boutique", category: "Retail", location: "Chicago, IL", avatarUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=160&q=80&auto=format&fit=crop", tags: ["Fashion", "Women", "Local"], submittedAt: new Date().toISOString(), owner: "Avery" },
  { id: "4", name: "Harborview Seafood", category: "Restaurants", location: "Boston, MA", avatarUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=160&q=80&auto=format&fit=crop", tags: ["Seafood", "Reservations"], submittedAt: new Date().toISOString(), owner: "Morgan" },
  { id: "5", name: "Pinnacle Fitness", category: "Services", location: "Denver, CO", avatarUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=160&q=80&auto=format&fit=crop", tags: ["Gym", "Classes"], submittedAt: new Date().toISOString(), owner: "Riley" },
];

const categories = ["Restaurants", "Services", "Retail"];

const activity: ActivityItem[] = [
  { id: "a1", type: "success", text: "Approved 'The Roasted Bean'", meta: "by Admin • 2m ago", timestamp: new Date().toISOString() },
  { id: "a2", type: "info", text: "New submission: 'Bright Smile Dental'", meta: "Queue • 10m ago", timestamp: new Date().toISOString() },
  { id: "a3", type: "warning", text: "High report volume on 'Style & Grace'", meta: "Monitoring", timestamp: new Date().toISOString() },
  { id: "a4", type: "error", text: "Email service delay detected", meta: "Retries enabled", timestamp: new Date().toISOString() },
  { id: "a5", type: "info", text: "3 businesses updated details", meta: "Audit log", timestamp: new Date().toISOString() },
];

const status: SystemStatusEntry[] = [
  { service: "Database", status: "online", badge: "Operational" },
  { service: "Maps API", status: "degraded", badge: "Rate-limited" },
  { service: "Email Service", status: "online", badge: "Healthy" },
  { service: "Image CDN", status: "online", badge: "Healthy" },
  { service: "Payments", status: "offline", badge: "Outage" },
];

export default function AdminDashboardDemo() {
  return (
    <AdminDashboard
      sidebar={sidebar}
      activeNavId="overview"
      metrics={metrics}
      submissions={submissions}
      categories={categories}
      activity={activity}
      status={status}
      onSearch={(q) => console.log("search", q)}
    />
  );
}
