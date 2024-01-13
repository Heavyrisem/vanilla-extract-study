"use client";

import { Button } from "@/components/Button";
import { otherThemeClass, themeClass } from "@/theme/theme.css";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState(false);

  return (
    <main
      className={theme ? themeClass : otherThemeClass}
      onClick={() => setTheme(!theme)}
    >
      1234
      <Button>Button</Button>
    </main>
  );
}
