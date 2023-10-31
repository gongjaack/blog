import { style } from "@vanilla-extract/css";
import { s } from "../styles";
import { sprinkles } from "../styles/sprinkles.css";

export const layout = style([
  s.flexColumn,
  {
    gap: "0.5rem",
  },
]);

export const tagLabel = style({
  color: "#FE8646",
  fontSize: "0.8rem",
  fontWeight: 500,
  textTransform: "uppercase",
});

export const postDate = style({
  fontSize: "0.8rem",
  fontWeight: 500,
  color: "lightgrey",
});

export const postTitle = style([
  sprinkles({
    fontSize: {
      mobile: 3,
      desktop: 3.5,
    },
    whiteSpace: {
      mobile: "normal",
      desktop: "nowrap",
    },
  }),
  {
    fontWeight: 700,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
]);

export const bodyLayout = style({
  margin: "0.3rem 0 0.7rem",
});

export const description = style({
  fontSize: "0.9rem",
  color: "grey",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const infoLayout = style([
  s.flex,
  {
    gap: "0.7rem",
  },
]);

export const tagList = style([
  s.flex,
  {
    gap: "0.5rem",
    listStyle: "none",
  },
]);
