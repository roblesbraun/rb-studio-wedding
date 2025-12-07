"use client";

import {
    Heart,
    ListChecks,
    MapPin,
    BedDouble,
    Gift,
    Shirt,
    CalendarCheck,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

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

const bottomNavItems = [
    { label: "Itinerario", href: "#itinerario", icon: ListChecks },
    { label: "Ubicación", href: "#ubicacion", icon: MapPin },
    { label: "Hospedaje", href: "#hospedaje", icon: BedDouble },
    { label: "Regalos", href: "#regalos", icon: Gift },
    { label: "Vestimenta", href: "#vestimenta", icon: Shirt },
    { label: "RSVP", href: "#rsvp", icon: CalendarCheck },
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
        <>
            {/* Top navigation bar */}
            <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                <div className="container mx-auto flex h-16 items-center justify-center px-4 relative">
                    {/* Left navigation items - desktop only */}
                    <div className="hidden md:flex items-center gap-4 mr-8">
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

                    {/* Right navigation items - desktop only */}
                    <div className="hidden md:flex items-center gap-4 ml-8">
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

                    {/* Theme toggle - desktop only */}
                    <div className="hidden md:flex items-center ml-4">
                        <ModeToggle />
                    </div>

                    {/* Mobile theme toggle */}
                    <div className="md:hidden absolute right-4">
                        <ModeToggle />
                    </div>
                </div>
            </nav>

            {/* Bottom navigation bar - mobile only */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                <div className="flex justify-around items-center h-16 px-2">
                    {bottomNavItems.map((item) => {
                        const Icon = item.icon;
                        const isActive =
                            activeSection === item.href.replace("#", "");
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className={cn(
                                    "flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-md transition-colors min-w-0 flex-1",
                                    isActive
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-primary"
                                )}
                            >
                                <Icon className="h-5 w-5 shrink-0" />
                                <span className="text-[10px] font-medium leading-none text-center">
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
