"use client";
import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";
import { FaSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";

import { Button } from "@/components/ui/button";

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { setTheme } = useTheme();

  useLayoutEffect(() => {
    if (isDarkTheme) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [isDarkTheme, setTheme]);

  return (
    <Button
      className={`
        flex-center bg-primary fixed top-5 right-5 z-50 size-10 cursor-pointer
        rounded-full border-0 text-xl text-white shadow-xl outline-none
        md:top-8 md:right-8 md:size-12
      `}
      onClick={() => setIsDarkTheme(!isDarkTheme)}
    >
      {isDarkTheme ? <IoMoon /> : <FaSun />}
    </Button>
  );
};

export default ToggleTheme;
