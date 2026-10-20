"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderSearch } from "@/components/HeaderSearch";
import { MobileNav } from "@/components/MobileNav";
import { siteConfig } from "@/lib/config";

const navItems = [
  { href: "/", label: "Portal Home" },
  { href: "/mc", label: "Mill Certificate (MTC)" },
  { href: "/products", label: "Product Specifications" },
  { href: "/blog", label: "Technical Guides" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full z-50 glass-header border-b border-border-subtle shadow-sm bg-white/95 backdrop-blur-md">
      <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20 relative">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded bg-[#0F2942] flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-xl">verified</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-extrabold tracking-tight text-[#0F2942] uppercase leading-none">
                Technical Verification
              </span>
              <span className="font-technical-data text-[9px] uppercase tracking-widest text-slate-500 font-semibold mt-0.5">
                Material Traceability Portal
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all duration-200 font-technical-data text-xs uppercase tracking-wider font-semibold border-b-2 py-1 ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-slate-600 border-transparent hover:text-primary hover:border-primary/20"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="h-6 w-[1px] bg-border-subtle mx-2" />
          <HeaderSearch />
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/mc"
            className="hidden lg:inline-flex bg-primary text-white hover:bg-secondary px-5 py-2.5 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-all duration-200 active:scale-95 shadow-sm"
          >
            <span className="material-symbols-outlined text-sm mr-1.5">verified_user</span>
            Verify Heat No
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

