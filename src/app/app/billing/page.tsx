import { PLANS } from "@/lib/billing/entitlements";

export default function BillingPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">Plans</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {PLANS.map((plan) => (
          <article key={plan.name} className="rounded-xl border bg-surface p-5">
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="text-muted">£{plan.price}/month</p>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              <li>{plan.aiGenerations} AI generations</li>
              <li>{plan.linkedinConnections} LinkedIn connections</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
