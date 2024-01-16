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
import { Text } from "@/components/Text";
import "./global-style.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <body
      className={clsx(
        baseTokenClass,
        darkMode ? darkThemeClass : lightThemeClass
      )}
    >
      <Box padding={{ md: "2", lg: "4" }}>
        <Text fontSize="24">darkMode: {String(darkMode)}</Text>
      </Box>
      <Box padding="2" display="flex" gap={{ hover: "4" }}>
        <Button variant="outlined" onClick={() => setDarkMode(!darkMode)}>
          Button
        </Button>
        <Button variant="contained" onClick={() => setDarkMode(!darkMode)}>
          Button
        </Button>
      </Box>
    </body>
  );
}
