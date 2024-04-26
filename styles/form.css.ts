import { style } from "@vanilla-extract/css";

export const formWrap = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4em",
});

export const formBox = style({
  width: "420px",
});

export const formRow = style({
  display: "flex",
  alignItems: "center",
  selectors: {
    "& + &": {
      marginTop: "0.6em",
    },
  },
});

export const formRowSubmit = style({
  justifyContent: "center",
});

export const inputBox = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  padding: "10px 14px",
  border: "1px solid #B0B3B5",
  borderRadius: "18px",
  backgroundColor: "#fff",
});

export const input = style({
  flex: 1,
  lineHeight: 1,
  "::placeholder": {
    color: "#7E7E7F",
    fontSize: "0.875em",
  },
});

export const button = style({
  padding: "10px 14px",
  color: "#7E7E7F",
  backgroundColor: "#BEF0EF",
  borderRadius: "18px",
});

export const formError = style({
  color: "#DE6B2D",
  fontSize: "0.875em",
});
