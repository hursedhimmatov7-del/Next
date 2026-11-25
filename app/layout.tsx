import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GYM24 — Train strong. Live better.",
  description: "A welcoming gym, great coaches, and training built around you.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-black font-sans text-white">
        <div className="mx-auto min-h-screen w-full max-w-[1600px]">
          <header className="absolute left-0 right-0 top-0 z-20 mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-6 sm:px-12 lg:px-20">
            <Link href="/" aria-label="GYM24 home" className="text-2xl font-black tracking-[-0.09em]">GYM<span className="text-[#eaff00]">24</span></Link>
            <nav aria-label="Main navigation" className="flex items-center gap-5 text-[11px] font-semibold sm:gap-9 sm:text-sm">
              <Link className="transition hover:text-[#eaff00]" href="/advantages">Advantages</Link>
              <Link className="transition hover:text-[#eaff00]" href="/membership">Membership</Link>
              <Link className="transition hover:text-[#eaff00]" href="/about">About</Link>
            </nav>
          </header>
          {children}
          <footer className="flex flex-col gap-5 border-t border-white/10 px-6 py-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-20">
            <Link href="/" className="text-sm font-black tracking-[-0.08em] text-white">GYM<span className="text-[#eaff00]">24</span></Link>
            <p>Train strong. Live better.</p>
            <p>© 2026 GYM24</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
