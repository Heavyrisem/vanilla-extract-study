"use client";

import { Button } from "@/components/Button";
import {
  baseTokenClass,
  baseToken,
  darkThemeClass,
  lightThemeClass,
} from "@/theme/theme.css";
import { useState } from "react";
import clsx from "clsx";
import { Box } from "@/components/Box";

export default function Home() {
  const [theme, setTheme] = useState(false);

  return (
    <main
      className={clsx(baseTokenClass, theme ? lightThemeClass : darkThemeClass)}
      onClick={() => setTheme(!theme)}
    >
      <Box>light: {String(theme)}</Box>
      <Box padding="8">
        <Button variant="outlined">Button</Button>
        <Button variant="contained">Button</Button>
      </Box>
    </main>
  );
}
