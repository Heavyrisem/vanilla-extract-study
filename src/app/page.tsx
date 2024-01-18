"use client";

import { Button } from "@/components/Button";
import {
  baseTokenClass,
  baseToken,
  darkThemeClass,
  lightThemeClass,
} from "@/theme/theme.css";
import { useRef, useState } from "react";
import clsx from "clsx";
import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
import "./global-style.css";
import { Checkbox } from "@/components/Checkbox";
import { Popover } from "@/components/Popover";
import { Select } from "@/components/Select";
import { SelectItem } from "@/components/Select/context";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SelectItem[]>([]);

  const [anchorRef, setAnchorRef] = useState<HTMLElement | null>(null);

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
      <Box padding="2" display="flex" gap="4">
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

        <Popover.Root anchorEl={anchorRef}>
          <Popover.Trigger>
            <Button variant="contained" onClick={() => setOpen((o) => !o)}>
              Popover
            </Button>
          </Popover.Trigger>
          <Popover.Content>1234</Popover.Content>
        </Popover.Root>

        <div ref={setAnchorRef}>Anchor</div>

        <Select.Root
          onSelect={setSelected}
          selected={selected.map((i) => i.id)}
        >
          <Select.Trigger>
            <Button variant="contained">Select</Button>
          </Select.Trigger>
          <Select.Popover>
            <Select.Item id="1" value="1">
              1
            </Select.Item>
            <Select.Item id="2" value="2">
              2
            </Select.Item>
            <Select.Item id="3" value="3" disabled>
              3
            </Select.Item>
          </Select.Popover>
        </Select.Root>
      </Box>
    </body>
  );
}
