import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";
import { galada, notoSansKr } from "@/styles/fonts/fonts";

export const global = createGlobalThemeContract({
  bgColor: {
    white: "bg-white",
    primaryBrand: "bg-primary-brand",
  },
  color: {
    primaryNeutral: "primary-neutral",
    primaryBrand: "primary-neutral",
    secondary: "primary-neutral",
    error: "primary-neutral",
  },
  fontFamily: {
    logo: "font-logo",
    common: "font-common",
  },
  fontSize: {
    small: "font-sm",
    regular: "font-rg",
    large: "font-lg",
  },
  fontWeight: {
    normal: "font-normal",
    semiBold: "font-semibold",
    bold: "font-bold",
  },
});

createGlobalTheme(":root", global, {
  bgColor: {
    white: "#F7FBFF",
    primaryBrand: "#BEF0EF",
  },
  color: {
    primaryNeutral: "#212521",
    primaryBrand: "#5BDCC0",
    secondary: "#B0B3B5",
    error: "#DE6B2D",
  },

  fontFamily: {
    logo: galada.variable,
    common: notoSansKr.variable,
  },
  fontSize: {
    small: "0.875rem",
    regular: "1rem",
    large: "1.25rem",
  },
  fontWeight: {
    normal: "400",
    semiBold: "500",
    bold: "700",
  },
});
