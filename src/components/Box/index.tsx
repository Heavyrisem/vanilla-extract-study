import { useMemo } from "react";
import { BoxSprinkles, boxSprinkles } from "./box.css";
import clsx from "clsx";
import { useSprinkleProps } from "@/hooks/useSprinkleProps";

type BoxProps = BoxSprinkles & React.HTMLAttributes<HTMLDivElement>;

export const Box: React.FC<BoxProps> = ({ className, ...rest }) => {
  const { sprinkleProps, nativeProps } = useSprinkleProps(
    rest,
    boxSprinkles.properties
  );

  return (
    <div
      className={clsx(boxSprinkles(sprinkleProps), className)}
      {...nativeProps}
    />
  );
};
