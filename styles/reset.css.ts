import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
});

globalStyle("html, body", {
  height: "100%",
});

globalStyle("body", {
  lineHeight: "1",
  fontSize: "14px",
  color: "#212521",
});

globalStyle("ol, ul", {
  listStyle: "none",
});

globalStyle(
  "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section",
  {
    display: "block",
  }
);

globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});
globalStyle("blockquote, q", {
  quotes: "none",
});

globalStyle("blockquote:before, blockquote:after, q:before, q:after", {
  content: "",
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("input, textarea", {
  padding: 0,
  margin: 0,
  border: 0,
  background: "none",
  fontFamily: "inherit",
});

globalStyle("textarea", {
  resize: "none",
});

globalStyle("input:focus, textarea:focus", {
  outline: "none",
});

globalStyle(
  "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus",
  {
    WebkitTextFillColor: "#212521",
    WebkitBoxShadow: "0 0 0px 1000px #fff inset",
    transition: "background-color 5000s ease-in-out 0s",
  }
);

globalStyle("button", {
  padding: 0,
  margin: 0,
  border: 0,
  fontSize: "inherit",
  fontFamily: "inherit",
  color: "inherit",
  lineHeight: "1",
  background: "none",
  cursor: "pointer",
});

globalStyle("img", {
  width: "100%",
  height: "auto",
  objectFit: "cover",
});
