import { baseToken } from "@/theme/theme.css";
import {
  createThemeContract,
  createVar,
  keyframes,
  style,
} from "@vanilla-extract/css";

// export const contentVars = createThemeContract({})

const contentHeightVar = createVar();
export const slideDown = keyframes({
  from: {
    height: baseToken.height[0],
  },
  to: {
    height: baseToken.height.auto,
  },
});

export const slideUp = keyframes({
  from: {
    height: baseToken.height.auto,
  },
  to: {
    height: baseToken.height[0],
  },
});

export const contentStyle = style({
  height: baseToken.height[0],
  overflow: "hidden",
  selectors: {
    "&[data-open='true']": {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
      height: baseToken.height.auto,
    },
    "&[data-open='false']": {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
      height: baseToken.height[0],
    },
  },
});
