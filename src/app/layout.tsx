import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strativa",
  description: "LinkedIn-first AI content platform for creators and agencies"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
