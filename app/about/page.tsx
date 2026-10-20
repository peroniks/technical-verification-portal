import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About | Technical Verification Portal",
  description: "Technical knowledge and material verification portal.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-container-max mx-auto px-gutter py-16">
      <div className="max-w-3xl">
        <span className="text-slate-500 font-technical-data text-xs uppercase tracking-widest font-bold">Portal Information</span>
        <h1 className="font-display text-3xl md:text-5xl text-primary font-extrabold mt-2 mb-6">About Technical Verification Portal</h1>
        <div className="font-body text-slate-600 text-sm md:text-base leading-relaxed space-y-4">
          <p>
            This portal provides standardized engineering data, material specifications, and electronic verification of Mill Test Certificates (MTC EN 10204 3.1).
          </p>
          <p>
            Our objective is to facilitate seamless material traceability across industrial piping projects, ensuring that chemical composition, tensile test results, and mechanical specifications are readily accessible for QA audit and verification.
          </p>
        </div>
        <div className="mt-8 flex gap-4">
          <Link
            href="/mc"
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-secondary px-6 py-3 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">verified_user</span>
            MTC Verification Portal
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-all"
          >
            Product Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}


