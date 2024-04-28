import { style } from "@vanilla-extract/css";
import { aside } from "./common.css";

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
  selectors: {
    [`${aside} &`]: {
      width: "100%",
    },
  },
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

export const textareaBox = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  position: "relative",
  border: "1px solid #d2d2d2",
  borderRadius: "19px",
  backgroundColor: "#fff",
});

export const textarea = style({
  flex: 1,
  lineHeight: 1.6,
  minHeight: "9.6em",
  margin: "10px 14px",
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
    [`${textareaBox} &`]: {
      alignSelf: "flex-end",
      width: "100%",
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
