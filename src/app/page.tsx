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
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={clsx(
        baseTokenClass,
        darkMode ? darkThemeClass : lightThemeClass
      )}
    >
      <Box>light: {String(darkMode)}</Box>
      <Box padding="2" display="flex" gap="2">
        <Button variant="outlined" onClick={() => setDarkMode(!darkMode)}>
          Button
        </Button>
        <Button variant="contained" onClick={() => setDarkMode(!darkMode)}>
          Button
        </Button>
      </Box>
    </main>
  );
}
