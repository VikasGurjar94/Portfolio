"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="overflow-hidden">
      <Button
        className="cursor-pointer text-black hover:bg-gray-400 bg-gray-200 rounded-md h-10 w-10 flex items-center justify-center"
        onClick={() =>
          setTheme(currentTheme === "light" ? "dark" : "light")
        }
      >
        {currentTheme === "light" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5 text-white" />
        )}
      </Button>
    </div>
  );
};

export default ThemeToggler;