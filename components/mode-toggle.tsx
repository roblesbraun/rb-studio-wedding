"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    "h-9 w-9"
                )}
                disabled
            >
                <Sun className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle theme</span>
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "h-9 w-9"
            )}
        >
            {theme === "light" ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
