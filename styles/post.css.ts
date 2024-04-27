import { style } from "@vanilla-extract/css";

export const modalWrapper = style({
  position: "fixed",
  left: 0,
  top: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0,0,0,0.7)",
});

export const modalContent = style({
  position: "relative",
  padding: "2em",
  width: "800px",
  border: "1px solid #B0B3B5",
  borderRadius: "8px",
  backgroundColor: "#fff",
  boxShadow: "2px 2px 12px 0px rgba(0,0,0,0.5)",
});

export const ButtonClose = style({
  position: "absolute",
  top: "2em",
  right: "2em",
});

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
  selectors: {
    [`${modalContent} &`]: {
      fontSize: "1.2em",
    },
  },
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
  selectors: {
    [`${modalContent} &`]: {
      padding: "1em 0",
      border: "none",
      borderRadius: "0",
      backgroundColor: "transparent",
    },
  },
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

export const likeItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.2em",
});

export const likeNumber = style({
  color: "#7E7E7F",
  fontSize: "0.875em",
});

export const likeNumberSelected = style({
  color: "#5BDCC0",
});
