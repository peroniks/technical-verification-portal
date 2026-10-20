import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative min-h-[580px] md:h-[640px] flex items-center overflow-hidden py-12 md:py-0">
      <Image
        alt="Industrial engineering background"
        src="/images/quality-control.png"
        fill
        priority
        className="object-cover object-center scale-105 opacity-80"
      />
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Safety highlight line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />

      <div className="relative max-w-container-max mx-auto px-gutter w-full z-10">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/40 text-white rounded font-technical-data text-[10px] uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Heat Number &amp; Material Traceability Portal
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white font-extrabold tracking-tight leading-[1.15] mb-6">
            Presisi &amp; Material <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              Traceability Verification
            </span>
          </h1>
          <p className="font-body-lg text-base md:text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
            Portal verifikasi sertifikat material (MTC 3.1) dan pusat dokumentasi spesifikasi teknis untuk komponen flange, pipe fittings, dan valves berstandar internasional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/mc"
              className="flex items-center justify-center gap-2 bg-primary text-white hover:bg-secondary px-8 py-3.5 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-base">verified_user</span>
              Verifikasi Heat Number (MTC)
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 bg-slate-900/60 text-white border border-slate-700/60 hover:bg-slate-900/90 hover:border-slate-600 px-8 py-3.5 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-base">category</span>
              Spesifikasi Produk
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-700/50 pt-8">
            {[
              { icon: "verified", label: "EN 10204 3.1 Compliant" },
              { icon: "history", label: "Material Traceability" },
              { icon: "shield", label: "SS304 / SS316 Specifications" },
              { icon: "settings_suggest", label: "Dimensional Standards" }
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">{badge.icon}</span>
                <span className="font-technical-data text-[10px] text-slate-200 font-bold tracking-wider uppercase">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
