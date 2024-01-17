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
import { Checkbox } from "@/components/Checkbox";
import { Popover } from "@/components/Popover";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <body
      className={clsx(
        baseTokenClass,
        darkMode ? darkThemeClass : lightThemeClass
      )}
    >
      <Box>
        <Text fontSize="24">darkMode: {String(darkMode)}</Text>
      </Box>
      <Box padding="2" gap="4">
        <Button variant="outlined" onClick={() => setDarkMode(!darkMode)}>
          Button
        </Button>
        <Button variant="contained" onClick={() => setDarkMode(!darkMode)}>
          Button
        </Button>
        <Button variant="outlined" disabled>
          Button
        </Button>
        <Button variant="contained" disabled>
          Button
        </Button>
        <Checkbox />
        <Checkbox disabled />
        <Checkbox checked disabled />

        <Popover.Root>
          <Popover.Trigger>
            <Button variant="contained" onClick={() => setOpen((o) => !o)}>
              Popover
            </Button>
          </Popover.Trigger>
          <Popover.Content>1234</Popover.Content>
        </Popover.Root>
      </Box>
    </body>
  );
}
