import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Engineering Downloads & Standards",
  description: "Technical guides and material specifications documentation.",
  alternates: { canonical: "/downloads" },
};

export const dynamic = "force-static";

export default function DownloadsPage() {
  return (
    <div className="max-w-container-max mx-auto px-gutter py-16">
      <div className="max-w-3xl">
        <span className="text-slate-500 font-technical-data text-xs uppercase tracking-widest font-bold">Documentation</span>
        <h1 className="font-display text-3xl md:text-5xl text-primary font-extrabold mt-2 mb-4">Engineering Downloads</h1>
        <p className="font-body text-slate-600 text-sm md:text-base leading-relaxed mb-8">
          Technical specifications, dimension standards, and material data sheets are accessible through our product catalog and verification systems.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded p-6 mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
            <div>
              <div className="font-technical-data text-xs font-bold text-primary uppercase tracking-wider">Mill Test Certificates (MTC)</div>
              <p className="text-xs text-slate-500 font-body mb-2">Verify and download electronic inspection certificates directly via heat number.</p>
              <Link href="/mc" className="text-xs font-technical-data font-semibold text-primary hover:underline">
                Open MTC Verification Portal →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

