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

export default function Home() {
  const [theme, setTheme] = useState(false);

  return (
    <main
      className={clsx(baseTokenClass, theme ? lightThemeClass : darkThemeClass)}
      onClick={() => setTheme(!theme)}
    >
      1234
      <Button variant="outlined">Button</Button>
    </main>
  );
}
