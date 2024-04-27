import { style } from "@vanilla-extract/css";
import { global } from "@/styles/theme.css";

export const common = style({
  //color: global.color.primaryNeutral,
  //backgroundColor: global.bgColor.white,
  backgroundColor: "#F7FBFF",
  height: "100vh",
});

export const logo = style({
  //fontFamily: global.fontFamily.logo,
  fontSize: "5em",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "0 8vw",
  width: "100vw",
  height: "4rem",
});

export const container = style({
  display: "flex",
  height: "100vh",
});

export const aside = style({
  padding: "6.8em 4em 3em",
  width: "24vw",
});

export const contentWrap = style({
  flex: 1,
  position: "relative",
  padding: "5em 4em 3em",
});

export const contentWrapTop = style({
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  display: "flex",
  justifyContent: "end",
});

export const navBox = style({});

export const navList = style({
  display: "flex",
  alignItems: "center",
});

export const navItem = style({
  display: "block",
  padding: "12px 24px 16px",
  fontWeight: "bold",
  ":hover": {
    color: "#5BDCC0",
  },
});
