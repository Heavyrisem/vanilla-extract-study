import { useControlled } from "@/hooks/useControlled";
import React, { useState } from "react";

interface PopoverContextState {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  anchorEl: HTMLElement | null;
  setAnchorEl: (el: HTMLElement | null) => void;
}

export const PopoverContext = React.createContext<PopoverContextState>({
  open: false,
  handleOpen: () => {},
  handleClose: () => {},
  anchorEl: null,
  setAnchorEl: (el: HTMLElement | null) => {},
});

export interface PopoverProviderProps
  extends Pick<Partial<PopoverContextState>, "open" | "anchorEl"> {
  children: React.ReactNode;
}
export const PopoverProvider = ({
  open: openProp,
  anchorEl: anchorElProp,
  children,
}: PopoverProviderProps) => {
  const [open, setOpen] = useControlled(false, openProp);
  const [anchorEl, setAnchorEl] = useControlled(null, anchorElProp);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PopoverContext.Provider
      value={{ open, handleOpen, handleClose, anchorEl, setAnchorEl }}
    >
      {children}
    </PopoverContext.Provider>
  );
};

export const usePopoverContext = () => {
  const context = React.useContext(PopoverContext);
  if (context === undefined) {
    throw new Error("usePopoverContext must be used within a PopoverProvider");
  }
  return context;
};
