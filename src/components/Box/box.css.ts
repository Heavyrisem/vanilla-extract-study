import { responseProperties } from "@/theme/properties/responsive-properties.css";
import { createSprinkles } from "@vanilla-extract/sprinkles";

export const boxSprinkles = createSprinkles(responseProperties);

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0];
