import { style } from "@vanilla-extract/css";

export const scrollWrap = style({
  height: "100%",
  overflowY: "auto",
  "::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
    paddingLeft: "4px",
  },
  "::-webkit-scrollbar-track": {
    backgroundColor: "#F7FBFF",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#f2f2f2",
    borderRadius: "3px",
  },
});

export const postList = style({
  width: "100%",
});
