import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PPDB KB Puspa Ligar",
  description: "Proyek sistem informasi pendaftaran peserta didik baru KB Puspa Ligar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
