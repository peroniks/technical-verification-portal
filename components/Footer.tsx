import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-[#0F2942] text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-auto">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-lg">verified</span>
              </div>
              <span className="font-display text-lg font-extrabold tracking-tight text-white uppercase">
                Technical Verification Portal
              </span>
            </div>
            <p className="font-body-md text-xs text-slate-400 leading-relaxed max-w-sm">
              Technical Knowledge &amp; Material Traceability Portal. Providing standardized engineering specifications, material guides, and verified Mill Test Certificate (MTC 3.1) records.
            </p>
          </div>

          <div>
            <h5 className="font-technical-data text-xs font-semibold mb-6 text-white uppercase tracking-wider">
              Verification &amp; Products
            </h5>
            <ul className="space-y-3 text-xs text-slate-400 font-technical-data">
              <li>
                <Link className="hover:text-primary transition-colors duration-200 flex items-center gap-1.5" href="/mc">
                  <span className="material-symbols-outlined text-xs text-primary">verified_user</span>
                  MTC Certificate Verification
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/products">
                  Product Catalog &amp; Specifications
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/products/stainless-steel-flanges">
                  Stainless Steel Flanges (ANSI / JIS / DIN)
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/products/valves">
                  Industrial Valves
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-technical-data text-xs font-semibold mb-6 text-white uppercase tracking-wider">
              Technical Resources
            </h5>
            <ul className="space-y-3 text-xs text-slate-400 font-technical-data">
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/blog">
                  Knowledge Center Articles
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/blog?category=Flange%20Guide">
                  Flange Standards &amp; Pressure Guides
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/blog?category=Quality%20%26%20Traceability">
                  Material Traceability &amp; QA
                </Link>
              </li>
              <li>
                <span className="text-slate-500 text-[11px] block mt-4 leading-relaxed font-body">
                  Support: {siteConfig.supportEmail}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-body-md">
          <p>
            © {new Date().getFullYear()} Technical Verification Portal. All technical data and material specifications provided for engineering reference.
          </p>
          <div className="flex gap-4 font-technical-data text-[11px] text-slate-400">
            <span>EN 10204 3.1 Compliant Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

