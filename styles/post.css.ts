import { style } from "@vanilla-extract/css";

export const postItem = style({
  selectors: {
    "& + &": {
      marginTop: "2em",
    },
  },
});

export const postTop = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const userInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "1em",
});

export const username = style({
  fontWeight: "bold",
});

export const postCreatedAt = style({
  color: "#7E7E7F",
  fontSize: "0.875em",
});

export const postContent = style({
  display: "flex",
  alignItems: "center",
  padding: "1em",
  marginTop: "6px",
  minHeight: "5.2em",
  border: "1px solid #B0B3B5",
  borderRadius: "8px",
  backgroundColor: "#fff",
});

export const contentBox = style({});

export const contentText = style({
  lineHeight: 1.6,
});

export const feedbacks = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
});

export const feedbackItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
