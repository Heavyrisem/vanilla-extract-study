import { Popover } from "@/components/Popover";
import { SelectContextProvider, SelectContextProviderProps } from "../context";
import { Button } from "@/components/Button";
import {
  PopoverContext,
  PopoverProviderProps,
} from "@/components/Popover/context";
import { useEffect } from "react";

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
