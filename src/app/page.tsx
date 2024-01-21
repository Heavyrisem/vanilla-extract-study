"use client";

import { Button } from "@/components/atom/Button";
import {
  baseTokenClass,
  baseToken,
  darkThemeClass,
  lightThemeClass,
} from "@/theme/theme.css";
import { useRef, useState } from "react";
import clsx from "clsx";
import { Box } from "@/components/atom/Box";
import { Text } from "@/components/atom/Text";
import "./global-style.css";
import { Checkbox } from "@/components/Checkbox";
import { Switch } from "@/components/atom/Switch";
import { Accordian } from "@/components/molecules/Accordian";
import { Popover } from "@/components/molecules/Popover";
import { Select } from "@/components/molecules/Select";
import { SelectItem } from "@/components/molecules/Select/context";

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
        <Box>
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
        </Box>
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

        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
      </Box>
      <Box padding="2" width="64">
        <Accordian.Root>
          <Accordian.Item id="1">
            <Accordian.Trigger>Trigger1</Accordian.Trigger>
            <Accordian.Content>Content1</Accordian.Content>
          </Accordian.Item>
          <Accordian.Item id="2">
            <Accordian.Trigger>Trigger2</Accordian.Trigger>
            <Accordian.Content>Content2</Accordian.Content>
          </Accordian.Item>
        </Accordian.Root>
      </Box>
    </body>
  );
}
