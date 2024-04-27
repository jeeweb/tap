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
  border: "1px solid #d2d2d2",
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
  padding: "1em",
  ":hover": {
    backgroundColor: "#fff",
  },
  selectors: {
    "& + &": {
      borderTop: "1px solid #f2f2f2",
    },
  },
});

export const postTop = style({
  display: "flex",
  alignItems: "center",
  gap: "0.6em",
});

export const userInfo = style({
  display: "flex",
  alignItems: "center",
});

export const username = style({
  fontWeight: "bold",
  selectors: {
    [`${modalContent} &`]: {
      fontSize: "1.6em",
      marginBottom: "12px",
    },
  },
});

export const symbol = style({
  color: "#c1bebe",
});

export const postCreatedAt = style({
  color: "#7E7E7F",
  fontSize: "0.875em",
  selectors: {
    [`${modalContent} &`]: {
      fontSize: "1em",
    },
  },
});

export const postContent = style({
  marginTop: "6px",
  minHeight: "2.6em",
  selectors: {
    [`${modalContent} &`]: {
      marginTop: "12px",
    },
  },
});

export const contentBox = style({
  maxHeight: "8em",
  overflowY: "auto",
  "::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },
  "::-webkit-scrollbar-track": {
    backgroundColor: "#F7FBFF",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#f2f2f2",
    borderRadius: "3px",
    border: "2px solid #F7FBFF",
  },
  selectors: {
    [`${modalContent} &`]: {
      maxHeight: "16em",
    },
    [`${modalContent} &::-webkit-scrollbar-track`]: {
      backgroundColor: "#fff",
    },
    [`${modalContent} &::-webkit-scrollbar-thumb`]: {
      borderColor: "#fff",
    },
    [`${postItem}:hover &::-webkit-scrollbar-track`]: {
      backgroundColor: "#fff",
    },
    [`${postItem}:hover &::-webkit-scrollbar-thumb`]: {
      borderColor: "#fff",
    },
  },
});

export const contentText = style({
  lineHeight: 1.6,
});

export const feedbacks = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  marginLeft: "8px",
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
  color: "#929292",
  fontSize: "0.875em",
});

export const likeNumberSelected = style({
  color: "#5BDCC0",
});
