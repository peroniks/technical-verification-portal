import type { Metadata } from "next";
import { MillCertificateClient } from "../mill-certificate/mill-certificate-client";

export const metadata: Metadata = {
  title: "Mill Certificate Verification | Heat Number Traceability",
  description: "Verify material authenticity using Heat Number traceability and MTC 3.1 certification records.",
  alternates: { canonical: "/mc" },
};

export const dynamic = "force-static";

export default function McPage() {
  return <MillCertificateClient />;
}
