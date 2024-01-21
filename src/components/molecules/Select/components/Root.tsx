import { SelectContextProvider, SelectContextProviderProps } from "../context";
import { Button } from "@/components/atom/Button";
import { useEffect } from "react";
import { PopoverProviderProps } from "../../Popover/context";
import { Popover } from "../../Popover";

interface RootProps extends SelectContextProviderProps, PopoverProviderProps {}

export const Root: React.FC<RootProps> = ({
  children,
  open,
  anchorEl,
  ...rest
}) => {
  return (
    <Popover.Root open={open} anchorEl={anchorEl}>
      <SelectContextProvider {...rest}>{children}</SelectContextProvider>
    </Popover.Root>
  );
};
