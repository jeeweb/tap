import { style } from "@vanilla-extract/css";

export const scrollWrap = style({
  height: "100%",
  overflowY: "auto",
  "::-webkit-scrollbar": {
    width: "12px",
    height: "12px",
  },
  "::-webkit-scrollbar-track": {
    backgroundColor: "#F7FBFF",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#f2f2f2",
    borderRadius: "3px",
    border: "3px solid #F7FBFF",
  },
});

export const postList = style({
  width: "100%",
});
