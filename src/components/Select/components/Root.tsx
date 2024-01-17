import { Popover } from "@/components/Popover";
import { SelectContextProvider, SelectContextProviderProps } from "../context";
import { Button } from "@/components/Button";
import {
  PopoverContext,
  PopoverProviderProps,
} from "@/components/Popover/context";

interface RootProps extends SelectContextProviderProps, PopoverProviderProps {}

export const Root: React.FC<RootProps> = ({
  children,
  open,
  anchorEl,
  ...rest
}) => {
  return (
    <SelectContextProvider {...rest}>
      <Popover.Root open={open} anchorEl={anchorEl}>
        {children}
      </Popover.Root>
    </SelectContextProvider>
  );
};
