import { style } from "@vanilla-extract/css";
import { global } from "@/styles/theme.css";

export const common = style({
  //color: global.color.primaryNeutral,
  //backgroundColor: global.bgColor.white,
  backgroundColor: "#F7FBFF",
});

export const logo = style({
  //fontFamily: global.fontFamily.logo,
});

export const header = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "0 8vw",
  width: "100vw",
  height: "4rem",
});

export const contentWrap = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "2em",
  padding: "0 8vw",
});

export const navList = style({
  display: "flex",
  alignItems: "center",
});

export const navItem = style({
  padding: "2px 4px",
});
