import { Noto_Sans_KR, Galada } from "next/font/google";

export const notoSansKr = Noto_Sans_KR({
  display: "swap",
  preload: false,
  weight: ["400", "500", "700"],
  variable: "--noto-sans-kr",
});

export const galada = Galada({
  display: "swap",
  preload: false,
  weight: "400",
  variable: "--galada",
});
