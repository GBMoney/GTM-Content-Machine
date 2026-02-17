import { AppShell } from "@/components/app-shell";

export default function SaaSLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
