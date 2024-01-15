import { useMemo } from "react";
import { BoxSprinkles, boxSprinkles } from "./box.css";
import clsx from "clsx";

type BoxProps = BoxSprinkles & React.HTMLAttributes<HTMLDivElement>;

export const Box: React.FC<BoxProps> = ({ className, ...rest }) => {
  const { sprinkleProps, nativeProps } = useMemo(() => {
    return Object.entries(rest).reduce(
      (acc, [key, value]) => {
        if (boxSprinkles.properties.has(key as keyof BoxSprinkles)) {
          acc.sprinkleProps[key] = value;
        } else {
          acc.nativeProps[key] = value;
        }

        return acc;
      },
      {
        sprinkleProps: {} as Record<string, unknown>,
        nativeProps: {} as Record<string, unknown>,
      }
    );
  }, [rest]);

  return (
    <div
      className={clsx(boxSprinkles(sprinkleProps), className)}
      {...nativeProps}
    />
  );
};
