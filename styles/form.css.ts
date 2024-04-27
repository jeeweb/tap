import { style } from "@vanilla-extract/css";

export const formWrap = style({
  display: "flex",
  flexDirection: "column",
  gap: "4em",
});

export const formTitle = style({
  fontSize: "2em",
});

export const formBox = style({
  width: "420px",
});

export const formRowSubmit = style({
  display: "flex",
  alignItems: "center",
});

export const formRow = style({
  position: "relative",
  paddingBottom: "1.2em",
  selectors: {
    "& + &": {
      marginTop: "1.2em",
    },
    [`&.${formRowSubmit}`]: {
      marginTop: "2em",
    },
  },
});

export const inputBox = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  // padding: "10px 14px",
  border: "1px solid #d2d2d2",
  borderRadius: "20px",
  backgroundColor: "#fff",
});

export const input = style({
  flex: 1,
  margin: "10px 14px",
  lineHeight: 1,
  "::placeholder": {
    color: "#c1bebe",
    fontSize: "0.875em",
  },
});

export const button = style({
  padding: "12px 18px",
  color: "#7E7E7F",
  backgroundColor: "#BEF0EF",
  borderRadius: "18px",
  selectors: {
    [`${inputBox} &`]: {
      fontSize: "0.875em",
    },
  },
});

export const formError = style({
  position: "absolute",
  bottom: 0,
  paddingLeft: "14px",
  color: "#DE6B2D",
  fontSize: "0.875em",
});
