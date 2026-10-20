import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Technical Support",
  description: "Technical support and Mill Test Certificate (MTC) verification inquiries.",
  alternates: { canonical: "/contact" },
};

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <div className="max-w-container-max mx-auto px-gutter py-16">
      <div className="max-w-3xl">
        <span className="text-slate-500 font-technical-data text-xs uppercase tracking-widest font-bold">Assistance</span>
        <h1 className="font-display text-3xl md:text-5xl text-primary font-extrabold mt-2 mb-4">Technical Support</h1>
        <p className="font-body text-slate-600 text-sm md:text-base leading-relaxed mb-8">
          For technical specifications, catalog inquiries, or Mill Test Certificate (MTC) verification support, please contact our technical desk.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded p-6 mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-xl">mail</span>
            <div>
              <div className="font-technical-data text-xs font-bold text-primary uppercase tracking-wider">Email Contact</div>
              <a href={`mailto:${siteConfig.supportEmail}`} className="text-xs font-technical-data font-semibold text-slate-700 hover:text-primary">
                {siteConfig.supportEmail}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
            <div>
              <div className="font-technical-data text-xs font-bold text-primary uppercase tracking-wider">MTC Heat Number Verification</div>
              <Link href="/mc" className="text-xs font-technical-data font-semibold text-primary hover:underline">
                Open Online Verification Portal →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

