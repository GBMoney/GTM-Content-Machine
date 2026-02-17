import Link from "next/link";

const features = [
  "AI writing + rewriting",
  "LinkedIn scheduling + queue",
  "Agency multi-client workflows",
  "Approval flows + analytics"
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-slate-200">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
        <span className="w-fit rounded-xl border px-3 py-1 text-xs text-muted">STRATIVA</span>
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight">Scale LinkedIn content operations with AI, approvals, and publishing in one platform.</h1>
        <p className="max-w-2xl text-muted">Built for creators, marketing teams, and agencies managing multiple clients.</p>
        <div className="flex gap-3">
          <Link href="/app/dashboard" className="rounded-xl bg-primary px-5 py-3 font-medium transition-all duration-200 ease-out hover:opacity-90">Open App</Link>
          <Link href="/app/billing" className="rounded-xl border px-5 py-3">Pricing</Link>
        </div>
        <ul className="grid gap-3 md:grid-cols-2">
          {features.map((feature) => (
            <li key={feature} className="rounded-xl border bg-surface p-4 text-sm">{feature}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
