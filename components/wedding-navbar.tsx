"use client";

import { Heart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { label: "ITINERARIO", href: "#itinerario" },
    { label: "UBICACIÓN", href: "#ubicacion" },
    { label: "HOSPEDAJE", href: "#hospedaje" },
];

const navItemsRight = [
    { label: "MESA DE REGALOS", href: "#regalos" },
    { label: "CÓDIGO DE VESTIMENTA", href: "#vestimenta" },
    { label: "RSVP", href: "#rsvp" },
];

export function WeddingNavbar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "itinerario",
                "ubicacion",
                "hospedaje",
                "regalos",
                "vestimenta",
                "rsvp",
            ];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Left navigation items */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                activeSection === item.href.replace("#", "")
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Center logo */}
                <div className="flex items-center gap-2">
                    <Heart className="h-6 w-6 fill-primary text-primary" />
                    <span className="text-xl font-serif font-semibold">
                        M & F
                    </span>
                </div>

                {/* Right navigation items */}
                <div className="hidden md:flex items-center gap-6">
                    {navItemsRight.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                activeSection === item.href.replace("#", "")
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile menu placeholder - can be enhanced later */}
                <div className="md:hidden">
                    <span className="text-xs text-muted-foreground">Menu</span>
                </div>
            </div>
        </nav>
    );
}
