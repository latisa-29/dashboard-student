import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "../components/sidebar";

export const metadata: Metadata = {
  title: "StudentApp | Sistem Data Siswa",
  description: "Dashboard administrasi data siswa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <div className="app-layout">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}