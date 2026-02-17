import Link from "next/link";

const nav = [
  ["Dashboard", "/app/dashboard"],
  ["Editor", "/app/editor"],
  ["Calendar", "/app/calendar"],
  ["Billing", "/app/billing"],
  ["Settings", "/app/settings"]
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-slate-200">
      <aside className="w-64 border-r bg-surface/70 p-4">
        <h2 className="mb-6 text-lg font-semibold">Strativa</h2>
        <nav className="space-y-1">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="block rounded-xl px-3 py-2 text-sm text-muted transition-all duration-200 ease-out hover:bg-white/5 hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
