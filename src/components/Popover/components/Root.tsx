import { PopoverProvider, PopoverProviderProps } from "../context";

interface RootProps extends PopoverProviderProps {}

export const Root: React.FC<RootProps> = (props) => {
  return <PopoverProvider {...props} />;
};
