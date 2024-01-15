import { defineProperties } from "@vanilla-extract/sprinkles";
import { spacing } from "../token/spacing";
import { width } from "../token/width";
import { height } from "../token/height";
import { radius } from "../token/radius";

export const responseProperties = defineProperties({
  conditions: {
    all: {},
    sm: { "@media": "(min-width: 640px)" },
    md: { "@media": "(min-width: 768px)" },
    lg: { "@media": "(min-width: 1024px)" },
    xl: { "@media": "(min-width: 1280px)" },
    "2xl": { "@media": "(min-width: 1536px)" },
  },
  defaultCondition: "all",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    gap: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    width: width,
    minWidth: width,
    maxWidth: width,
    height: height,
    minHeight: height,
    maxHeight: height,
    borderRadius: radius,
    // etc.
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});
