import { getPlanEntitlements } from "@/lib/billing/entitlements";

export default function DashboardPage() {
  const entitlements = getPlanEntitlements("AGENCY");
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">Agency command center</h1>
      <p className="text-muted">Track AI usage, approvals, and scheduled posts across clients.</p>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border bg-surface p-4"><p className="text-xs text-muted">Client limit</p><p className="text-2xl">{entitlements.clientWorkspaces}</p></div>
        <div className="rounded-xl border bg-surface p-4"><p className="text-xs text-muted">Monthly AI quota</p><p className="text-2xl">{entitlements.aiGenerations}</p></div>
        <div className="rounded-xl border bg-surface p-4"><p className="text-xs text-muted">Scheduling</p><p className="text-2xl">{entitlements.unlimitedScheduling ? "Unlimited" : entitlements.scheduledPosts}</p></div>
      </div>
    </section>
  );
}
