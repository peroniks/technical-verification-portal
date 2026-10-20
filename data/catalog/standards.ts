import type { CatalogStandard } from "@/lib/types";

export const standardsByFamily: Record<string, CatalogStandard[]> = {
  // Stainless Steel Flanges
  "plate-flange": [
    { code: "jis-5k-ff", name: "JIS 5K FF" },
    { code: "jis-10k-ff", name: "JIS 10K FF" },
    { code: "jis-16k-ff", name: "JIS 16K FF" },
    { code: "jis-20k-ff", name: "JIS 20K FF" },
    { code: "ansi-300lbs-ff", name: "ANSI 300LBS FF" },
    { code: "din-2573-pn6-ff", name: "DIN 2573 PN 6 FF" },
    { code: "din-2576-pn10-ff", name: "DIN 2576 PN 10 FF" },
    { code: "din-2502-pn16-ff", name: "DIN 2502 PN 16 FF" },
    { code: "din-2503-pn40-ff", name: "DIN 2503 PN 40 FF" },
    { code: "uni-2276-pn6-ff", name: "UNI 2276 PN 6 FF" },
    { code: "uni-2277-pn10-ff", name: "UNI 2277 PN 10 FF" },
    { code: "uni-2278-pn16-ff", name: "UNI 2278 PN 16 FF" },
    { code: "uni-6084-pn40-ff", name: "UNI 6084 PN 40 FF" },
    { code: "en-1092-1-type-01a-pn6", name: "EN 1092-1 TYPE 01A PN 6" },
    { code: "en-1092-1-type-01a-pn10", name: "EN 1092-1 TYPE 01A PN 10" },
    { code: "en-1092-1-type-01a-pn16", name: "EN 1092-1 TYPE 01A PN 16" },
    { code: "en-1092-1-type-01a-pn25", name: "EN 1092-1 TYPE 01A PN 25" },
    { code: "en-1092-1-type-01a-pn40", name: "EN 1092-1 TYPE 01A PN 40" },
    { code: "en-1092-1-01a-pn10-met", name: "EN 1092-1 01A PN 10 MET" },
    { code: "en-1092-1-01a-pn16-met", name: "EN 1092-1 01A PN 16 MET" },
    { code: "en-1092-1-01a-pn40-met", name: "EN 1092-1 01A PN 40 MET" },
    { code: "en-1092-1-01a-pn10-red", name: "EN 1092-1 01A PN 10 RED" },
    { code: "en-1092-1-01a-pn16-red", name: "EN 1092-1 01A PN 16 RED" },
    { code: "as2129-table-e", name: "AS2129 TABLE E" },
    { code: "ansi-150lbs-ff", name: "ANSI 150LBS FF" },
  ],
  "blind-flange": [
    { code: "jis-5k-ff-blind", name: "JIS 5K FF Blind" },
    { code: "jis-10k-ff-blind", name: "JIS 10K FF Blind" },
    { code: "jis-16k-ff-blind", name: "JIS 16K FF Blind" },
    { code: "jis-20k-ff-blind", name: "JIS 20K FF Blind" },
    { code: "ansi-150-ff-blind", name: "ANSI 150 FF Blind" },
    { code: "ansi-300-ff-blind", name: "ANSI 300 FF Blind" },
    { code: "din-2527-pn6-ff-blind", name: "DIN 2527 PN 6 FF Blind" },
    { code: "din-2527-pn10-ff-blind", name: "DIN 2527 PN 10 FF Blind" },
    { code: "din-2527-pn16-ff-blind", name: "DIN 2527 PN 16 FF Blind" },
    { code: "din-2527-pn40-ff-blind", name: "DIN 2527 PN 40 FF Blind" },
    { code: "uni-6091-pn6-blind", name: "UNI 6091 PN 6" },
    { code: "uni-6092-pn10-blind", name: "UNI 6092 PN 10" },
    { code: "en-1092-1-type-05a-pn6-blind", name: "EN 1092-1 TYPE 05A PN 6" },
    { code: "en-1092-1-type-05a-pn10-blind", name: "EN 1092-1 TYPE 05A PN 10" },
    { code: "en-1092-1-type-05a-pn16-blind", name: "EN 1092-1 TYPE 05A PN 16" },
    { code: "en-1092-1-type-05a-pn25-blind", name: "EN 1092-1 TYPE 05A PN 25" },
    { code: "en-1092-1-type-05a-pn40-blind", name: "EN 1092-1 TYPE 05A PN 40" },
    { code: "as2129-table-e-ff-blind", name: "AS2129 TABLE E FF BLIND" },
    { code: "en-1092-1-type-05a-pn10-red-blind", name: "EN 1092-1 TYPE 05A PN 10 RED" },
    { code: "en-1092-1-type-05a-pn16-red-blind", name: "EN 1092-1 TYPE 05A PN 16 RED" },
  ],
  "raised-face-flange": [
    { code: "jis-5k-rf", name: "JIS 5K RF" },
    { code: "jis-10k-rf", name: "JIS 10K RF" },
    { code: "jis-16k-rf", name: "JIS 16K RF" },
    { code: "jis-20k-rf", name: "JIS 20K RF" },
    { code: "din-2501-pn10-rf", name: "DIN 2501 PN 10 RF" },
    { code: "din-2501-pn16-rf", name: "DIN 2501 PN 16 RF" },
    { code: "din-2501-pn40-rf", name: "DIN 2501 PN 40 RF" },
    { code: "uni-2277-29-pn10-rf", name: "UNI 2277-29 PN 10 RF" },
    { code: "uni-2278-29-pn16-rf", name: "UNI 2278-29 PN 16 RF" },
    { code: "en-1092-1-type-01b-pn10", name: "EN 1092-1 TYPE 01B PN 10" },
    { code: "en-1092-1-type-01b-pn16", name: "EN 1092-1 TYPE 01B PN 16" },
    { code: "en-1092-1-type-01b-pn40", name: "EN 1092-1 TYPE 01B PN 40" },
    { code: "ansi-150lbs-rf", name: "ANSI 150LBS RF" },
    { code: "ansi-300lbs-rf", name: "ANSI 300LBS RF" },
  ],
  "raised-face-blind-flange": [
    { code: "jis-5k-rf-blind", name: "JIS 5K RF Blind" },
    { code: "jis-10k-rf-blind", name: "JIS 10K RF Blind" },
    { code: "jis-16k-rf-blind", name: "JIS 16K RF Blind" },
    { code: "jis-20k-rf-blind", name: "JIS 20K RF Blind" },
    { code: "ansi-150lbs-rf-blind", name: "ANSI 150LBS RF Blind" },
    { code: "ansi-300lbs-rf-blind", name: "ANSI 300LBS RF Blind" },
    { code: "din-2527-pn10-rf-blind", name: "DIN 2527 PN 10 RF Blind" },
    { code: "din-2527-pn16-rf-blind", name: "DIN 2527 PN 16 RF Blind" },
    { code: "din-2527-pn40-rf-blind", name: "DIN 2527 PN 40 RF Blind" },
  ],
  "loose-flange": [
    { code: "uni-6089-din-2642-pn10-loose", name: "UNI 6089 / DIN 2642 PN 10 LOOSE" },
    { code: "uni-6090-din-2643-pn16-loose", name: "UNI 6090 / DIN 2643 PN 16 LOOSE" },
  ],
  "slip-on-flange": [
    { code: "ansi-150lbs-sorf", name: "ANSI 150LBS SORF" },
    { code: "ansi-300lbs-sorf", name: "ANSI 300LBS SORF" },
    { code: "as2129-table-e-bossed", name: "AS2129 TABLE E BOSSED" },
  ],
  "threaded-flange": [
    { code: "en-1092-1-type-13-hubbed-threaded", name: "EN 1092-1 TYPE 13 HUBBED THREADED" },
    { code: "table-e-bossed-bsp-internal", name: "TABLE E BOSSED BSP INTERNAL" },
    { code: "bsp-threaded-flange-asme-b16-5-ansi-150lbs", name: "BSP THREADED FLANGE ASME B16.5 ANSI 150LBS" },
    { code: "npt-threaded-flange-asme-b16-5-ansi-150lbs", name: "NPT THREADED FLANGE ASME B16.5 ANSI 150LBS" },
  ],
  "welding-neck-flange": [
    { code: "din-2632-pn10-wnrf", name: "DIN 2632 PN 10 WNRF" },
    { code: "din-2633-pn16-wnrf", name: "DIN 2633 PN 16 WNRF" },
    { code: "din-2634-pn25-wnrf", name: "DIN 2634 PN 25 WNRF" },
    { code: "din-2635-pn40-wnrf", name: "DIN 2635 PN 40 WNRF" },
    { code: "ansi-150lbs-wnrf", name: "ANSI 150LBS WNRF" },
    { code: "ansi-300lbs-wnrf", name: "ANSI 300LBS WNRF" },
  ],
  "socket-welding-flange": [
    { code: "ansi-150lbs-socket-welded", name: "ANSI 150LBS SOCKET WELDED" },
  ],
  "square-flange": [
    { code: "square-flange-std", name: "SQUARE FLANGE" },
  ],

  // Aluminium Flanges
  "plat-flange-al": [
    { code: "din-2642-pn10-iso", name: "DIN 2642 PN 10 ISO SIZE" },
    { code: "din-2642-pn10-metric", name: "DIN 2642 PN 10 METRIC SIZE" }
  ],
  "blind-flange-al": [
    { code: "din-2527-pn10-blind", name: "DIN 2527 PN 10 BLIND" }
  ],

  // --- Screw Fittings (27 Families) ---
  "reduced-socket-nipple": [
    { code: "reduced-socket-nipple-npt", name: "Reduced Socket Nipple NPT" },
    { code: "reduced-socket-nipple-bsp", name: "Reduced Socket Nipple BSP" }
  ],
  "elbow-45-f-f": [
    { code: "elbow-45-ff-npt", name: "Elbow 45 F.F. NPT" },
    { code: "elbow-45-ff-bsp", name: "Elbow 45 F.F. BSP" }
  ],
  "elbow-45-m-f": [
    { code: "elbow-45-mf-npt", name: "Elbow 45 M.F. NPT" },
    { code: "elbow-45-mf-bsp", name: "Elbow 45 M.F. BSP" }
  ],
  "elbow-90-f-f": [
    { code: "elbow-90-ff-std-npt", name: "Elbow 90 F.F. (Standard) NPT" },
    { code: "elbow-90-ff-std-bsp", name: "Elbow 90 F.F. (Standard) BSP" },
    { code: "elbow-90-ff-eco-npt", name: "Elbow 90 F.F. (Economic) NPT" },
    { code: "elbow-90-ff-eco-bsp", name: "Elbow 90 F.F. (Economic) BSP" }
  ],
  "elbow-90-m-f": [
    { code: "elbow-90-mf-npt", name: "Elbow 90 M.F. NPT" },
    { code: "elbow-90-mf-bsp", name: "Elbow 90 M.F. BSP" }
  ],
  "equal-tee": [
    { code: "equal-tee-std-npt", name: "Equal Tee (Standard) NPT" },
    { code: "equal-tee-std-bsp", name: "Equal Tee (Standard) BSP" },
    { code: "equal-tee-eco-npt", name: "Equal Tee (Economic) NPT" },
    { code: "equal-tee-eco-bsp", name: "Equal Tee (Economic) BSP" }
  ],
  "reduced-tee": [
    { code: "reduced-tee-npt", name: "Reduced Tee NPT" },
    { code: "reduced-tee-bsp", name: "Reduced Tee BSP" }
  ],
  "hex-nipple": [
    { code: "hex-nipple-std-npt", name: "Hex Nipple (Standard) NPT" },
    { code: "hex-nipple-std-bsp", name: "Hex Nipple (Standard) BSP" },
    { code: "hex-nipple-eco-npt", name: "Hex Nipple (Economic) NPT" },
    { code: "hex-nipple-eco-bsp", name: "Hex Nipple (Economic) BSP" }
  ],
  "hex-hose-nipple": [
    { code: "hex-hose-nipple-npt", name: "Hex Hose Nipple NPT" },
    { code: "hex-hose-nipple-bsp", name: "Hex Hose Nipple BSP" }
  ],
  "hex-bushing": [
    { code: "hex-bushing-npt", name: "Hex Bushing NPT" },
    { code: "hex-bushing-bsp", name: "Hex Bushing BSP" }
  ],
  "reduced-hex-nipple": [
    { code: "reduced-hex-nipple-npt", name: "Reduced Hex Nipple NPT" },
    { code: "reduced-hex-nipple-bsp", name: "Reduced Hex Nipple BSP" }
  ],
  "coupling": [
    { code: "coupling-npt", name: "Coupling NPT" },
    { code: "coupling-bsp", name: "Coupling BSP" }
  ],
  "banded-coupling": [
    { code: "banded-coupling-npt", name: "Banded Coupling NPT" },
    { code: "banded-coupling-bsp", name: "Banded Coupling BSP" }
  ],
  "half-coupling": [
    { code: "half-coupling-npt", name: "Half Coupling NPT" },
    { code: "half-coupling-bsp", name: "Half Coupling BSP" }
  ],
  "reduced-coupling": [
    { code: "reduced-coupling-npt", name: "Reduced Coupling NPT" },
    { code: "reduced-coupling-bsp", name: "Reduced Coupling BSP" }
  ],
  "round-cap": [
    { code: "round-cap-npt", name: "Round Cap NPT" },
    { code: "round-cap-bsp", name: "Round Cap BSP" }
  ],
  "square-plug": [
    { code: "square-plug-npt", name: "Square Plug NPT" },
    { code: "square-plug-bsp", name: "Square Plug BSP" }
  ],
  "cross": [
    { code: "cross-npt", name: "Cross NPT" },
    { code: "cross-bsp", name: "Cross BSP" }
  ],
  "hex-cap": [
    { code: "hex-cap-npt", name: "Hex Cap NPT" },
    { code: "hex-cap-bsp", name: "Hex Cap BSP" }
  ],
  "hex-nut": [
    { code: "hex-nut-npt", name: "Hex Nut NPT" },
    { code: "hex-nut-bsp", name: "Hex Nut BSP" }
  ],
  "hex-plug": [
    { code: "hex-plug-npt", name: "Hex Plug NPT" },
    { code: "hex-plug-bsp", name: "Hex Plug BSP" }
  ],
  "union-f-f-conical-seat": [
    { code: "union-ff-conical-std-npt", name: "Union F.F. Conical Seat (Standard) NPT" },
    { code: "union-ff-conical-std-bsp", name: "Union F.F. Conical Seat (Standard) BSP" },
    { code: "union-ff-conical-eco-npt", name: "Union F.F. Conical Seat (Economic) NPT" },
    { code: "union-ff-conical-eco-bsp", name: "Union F.F. Conical Seat (Economic) BSP" }
  ],
  "union-m-f-conical-seat": [
    { code: "union-mf-conical-std-npt", name: "Union M.F. Conical Seat (Standard) NPT" },
    { code: "union-mf-conical-std-bsp", name: "Union M.F. Conical Seat (Standard) BSP" },
    { code: "union-mf-conical-eco-npt", name: "Union M.F. Conical Seat (Economic) NPT" },
    { code: "union-mf-conical-eco-bsp", name: "Union M.F. Conical Seat (Economic) BSP" }
  ],
  "union-f-f-teflon": [
    { code: "union-ff-teflon-std-npt", name: "Union F.F. Teflon (Standard) NPT" },
    { code: "union-ff-teflon-std-bsp", name: "Union F.F. Teflon (Standard) BSP" },
    { code: "union-ff-teflon-eco-npt", name: "Union F.F. Teflon (Economic) NPT" },
    { code: "union-ff-teflon-eco-bsp", name: "Union F.F. Teflon (Economic) BSP" }
  ],
  "union-elbow-90-f-f": [
    { code: "union-elbow-90-ff-npt", name: "Union Elbow 90 F.F. NPT" },
    { code: "union-elbow-90-ff-bsp", name: "Union Elbow 90 F.F. BSP" }
  ],
  "union-elbow-90-m-f": [
    { code: "union-elbow-90-mf-npt", name: "Union Elbow 90 M.F. NPT" },
    { code: "union-elbow-90-mf-bsp", name: "Union Elbow 90 M.F. BSP" }
  ],
  "tank-skin-fitting": [
    { code: "tank-skin-fitting-npt", name: "Tank Skin Fitting NPT" },
    { code: "tank-skin-fitting-bsp", name: "Tank Skin Fitting BSP" }
  ],

  // --- Butt Weld Fittings (8 Families) ---
  "butt-weld-elbow-45-long-radius": [
    { code: "butt-weld-elbow-45-lr-sch10", name: "ASME B16.9 SCH10" },
    { code: "butt-weld-elbow-45-lr-sch40", name: "ASME B16.9 SCH40" },
    { code: "butt-weld-elbow-45-lr-sch80", name: "ASME B16.9 SCH80" }
  ],
  "butt-weld-elbow-90-short-radius": [
    { code: "butt-weld-elbow-90-sr-sch10", name: "ASME B16.9 SCH10" },
    { code: "butt-weld-elbow-90-sr-sch40", name: "ASME B16.9 SCH40" },
    { code: "butt-weld-elbow-90-sr-sch80", name: "ASME B16.9 SCH80" }
  ],
  "butt-weld-elbow-90-long-radius": [
    { code: "butt-weld-elbow-90-lr-sch10", name: "ASME B16.9 SCH10" },
    { code: "butt-weld-elbow-90-lr-sch40", name: "ASME B16.9 SCH40" },
    { code: "butt-weld-elbow-90-lr-sch80", name: "ASME B16.9 SCH80" }
  ],
  "butt-weld-concentric-reducer": [
    { code: "butt-weld-concentric-reducer-sch10", name: "ASME B16.9 SCH10" },
    { code: "butt-weld-concentric-reducer-sch40", name: "ASME B16.9 SCH40" },
    { code: "butt-weld-concentric-reducer-sch80", name: "ASME B16.9 SCH80" }
  ],
  "butt-weld-tee": [
    { code: "butt-weld-tee-sch10", name: "ASME B16.9 SCH10" },
    { code: "butt-weld-tee-sch40", name: "ASME B16.9 SCH40" },
    { code: "butt-weld-tee-sch80", name: "ASME B16.9 SCH80" }
  ],
  "butt-weld-reduced-tee": [
    { code: "butt-weld-reduced-tee-sch10", name: "ASME B16.9 SCH10" },
    { code: "butt-weld-reduced-tee-sch40", name: "ASME B16.9 SCH40" },
    { code: "butt-weld-reduced-tee-sch80", name: "ASME B16.9 SCH80" }
  ],
  "butt-weld-end-cap": [
    { code: "butt-weld-end-cap-sch10", name: "ASME B16.9 SCH10" },
    { code: "butt-weld-end-cap-sch40", name: "ASME B16.9 SCH40" },
    { code: "butt-weld-end-cap-sch80", name: "ASME B16.9 SCH80" }
  ],
  "butt-weld-stub-end": [
    { code: "butt-weld-stub-end-sch10", name: "ASME B16.9 SCH10" },
    { code: "butt-weld-stub-end-sch40", name: "ASME B16.9 SCH40" },
    { code: "butt-weld-stub-end-sch80", name: "ASME B16.9 SCH80" }
  ],

  // --- Socket Weld Fittings (7 Families) ---
  "socket-welded-elbow-90": [
    { code: "socket-welded-elbow-90-cl3000", name: "ASME B16.11 Class 3000" },
    { code: "socket-welded-elbow-90-cl6000", name: "ASME B16.11 Class 6000" }
  ],
  "socket-welded-union-seat": [
    { code: "socket-welded-union-seat-std-cl3000", name: "Socket Welded Union Seat (Standard) Class 3000" },
    { code: "socket-welded-union-seat-std-cl6000", name: "Socket Welded Union Seat (Standard) Class 6000" },
    { code: "socket-welded-union-seat-eco-cl3000", name: "Socket Welded Union Seat (Economic) Class 3000" },
    { code: "socket-welded-union-seat-eco-cl6000", name: "Socket Welded Union Seat (Economic) Class 6000" },
    { code: "socket-weld-union-epdm-gasket-cl3000", name: "Socket Weld Union EPDM Gasket Class 3000" },
    { code: "socket-weld-union-epdm-gasket-cl6000", name: "Socket Weld Union EPDM Gasket Class 6000" }
  ],
  "socket-welded-elbow-45": [
    { code: "socket-welded-elbow-45-cl3000", name: "ASME B16.11 Class 3000" },
    { code: "socket-welded-elbow-45-cl6000", name: "ASME B16.11 Class 6000" }
  ],
  "socket-welded-tee": [
    { code: "socket-welded-tee-cl3000", name: "ASME B16.11 Class 3000" },
    { code: "socket-welded-tee-cl6000", name: "ASME B16.11 Class 6000" }
  ],
  "socket-welded-coupling": [
    { code: "socket-welded-coupling-cl3000", name: "ASME B16.11 Class 3000" },
    { code: "socket-welded-coupling-cl6000", name: "ASME B16.11 Class 6000" }
  ],
  "socket-welded-round-cap": [
    { code: "socket-welded-round-cap-cl3000", name: "ASME B16.11 Class 3000" },
    { code: "socket-welded-round-cap-cl6000", name: "ASME B16.11 Class 6000" }
  ],
  "socket-welded-reduced-coupling": [
    { code: "socket-welded-reduced-coupling-cl3000", name: "ASME B16.11 Class 3000" },
    { code: "socket-welded-reduced-coupling-cl6000", name: "ASME B16.11 Class 6000" }
  ],

  // --- Valves (5 Families) ---
  "1pc-ball-valve-1000-wog": [
    { code: "ball-valve-1pc-npt", name: "1PC Ball Valve NPT Threaded" },
    { code: "ball-valve-1pc-bsp", name: "1PC Ball Valve BSP Threaded" }
  ],
  "2pc-ball-valve-1000-wog": [
    { code: "ball-valve-2pc-npt", name: "2PC Ball Valve NPT Threaded" },
    { code: "ball-valve-2pc-bsp", name: "2PC Ball Valve BSP Threaded" }
  ],
  "3pc-ball-valve-1000-wog": [
    { code: "ball-valve-3pc-npt", name: "3PC Ball Valve NPT Threaded" },
    { code: "ball-valve-3pc-bsp", name: "3PC Ball Valve BSP Threaded" }
  ],
  "3pc-iso5211-direct-mounting-pad-ball-valve": [
    { code: "ball-valve-3pc-iso5211-npt", name: "3PC ISO5211 Ball Valve NPT" },
    { code: "ball-valve-3pc-iso5211-sw", name: "3PC ISO5211 Ball Valve SW" }
  ],
  "y-strainer-screwed-end": [
    { code: "y-strainer-npt", name: "Y-Strainer NPT Threaded" },
    { code: "y-strainer-bsp", name: "Y-Strainer BSP Threaded" }
  ],

  // Carbon Steel Flanges
  "plate-flange-cs": [
    { code: "jis-10k-ff-cs", name: "JIS 10K FF Carbon Steel" },
    { code: "ansi-150-ff-cs", name: "ANSI 150 FF Carbon Steel", pdfUrl: null }
  ],

  // Flange Ball Valves
  "flange-ball-valve": [
    { code: "flange-ball-valve-class150", name: "Flange Ball Valve ANSI Class 150" },
    { code: "flange-ball-valve-jis10k", name: "Flange Ball Valve JIS 10K" },
    { code: "flange-ball-valve-din-pn16", name: "Flange Ball Valve DIN PN16" }
  ]
};
