export const siteConfig = {
  name: "Technical Verification Portal",
  legalName: "Technical Verification Portal",
  portalName: "Material Traceability & Specifications",
  description:
    "Standardized engineering specifications, material test reports, and official heat number verification portal.",
  baseUrl: "https://peroni-group.com",
  // Production canonical verification URL for shortened QR codes and links
  verificationPortalUrl: "https://peroni-group.com/mc",
  // Legacy verification URL for previously printed physical QR codes
  legacyVerificationUrl: "https://peroniks.id/mill-certificate",
  supportEmail: "support@technical-verification.org",
} as const;
