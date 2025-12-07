# Customization Guide

Quick reference for customizing your wedding landing page.

## 🎨 Change Wedding Information

Edit `lib/mock-data.ts` and update the `weddingInfo` object:

```typescript
export const weddingInfo = {
    bride: "María", // Change bride's name
    groom: "Fernando", // Change groom's name
    date: "15 de Junio, 2025", // Change wedding date
    venue: "Jardín de los Sueños", // Change venue name
    address: "Av. Reforma 123, Ciudad de México", // Change address
    dressCode: "Formal", // Change dress code
    dressCodeDescription: "...", // Change description
};
```

## 📝 Update Itinerary

In `lib/mock-data.ts`, modify the `mockItinerary` array:

```typescript
export const mockItinerary: WeddingEvent[] = [
    {
        id: "1",
        title: "Ceremonia",
        time: "17:00", // Change time
        description: "...", // Change description
        location: "...", // Change location
    },
    // Add more events or remove existing ones
];
```

## 🏨 Update Hotels

In `lib/mock-data.ts`, modify the `mockHotels` array:

```typescript
export const mockHotels: Hotel[] = [
    {
        id: "1",
        name: "Hotel Name",
        distance: "2 km del venue",
        priceRange: "$2,500 - $3,500 MXN",
        phone: "+52 55 1234 5678",
        website: "https://hotel.com",
        description: "...",
    },
    // Add your recommended hotels
];
```

## 🎁 Update Gift Registry Links

In `app/page.tsx`, find the "Mesa de Regalos" section and update the buttons:

```tsx
<Button className="w-full">
    <Gift className="mr-2 h-4 w-4" />
    Ver Mesa de Regalos
</Button>
```

Add `onClick` or `href` to link to your actual registry.

## 🎨 Change Logo

In `components/wedding-navbar.tsx`, update the logo:

```tsx
{
    /* Current: Heart icon with M & F */
}
<div className="flex items-center gap-2">
    <Heart className="h-6 w-6 fill-primary text-primary" />
    <span className="text-xl font-serif font-semibold">M & F</span>
</div>;

{
    /* Option 1: Just initials */
}
<span className="text-2xl font-serif font-semibold">M & F</span>;

{
    /* Option 2: Use an image */
}
<Image src="/logo.png" alt="Logo" width={40} height={40} />;

{
    /* Option 3: Different icon from lucide-react */
}
<Sparkles className="h-6 w-6 text-primary" />;
```

## 🎨 Change Colors

The app uses Tailwind CSS with shadcn/ui. Colors are defined in `app/globals.css`.

To change the primary color, update the CSS variables in the `:root` and `.dark` sections.

Or use shadcn's built-in themes by running:

```bash
bunx shadcn@latest init
```

## 📱 Add Real Map

In `app/page.tsx`, find the Ubicación section and replace the placeholder:

```tsx
{
    /* Replace this placeholder */
}
<div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
    <div className="text-center space-y-2">
        <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Mapa del lugar</p>
    </div>
</div>;

{
    /* With Google Maps embed */
}
<iframe
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
    className="aspect-video w-full rounded-lg"
    allowFullScreen
    loading="lazy"
/>;
```

## 🔗 Add Real Links

Update the Google Maps and Waze buttons in the Ubicación section:

```tsx
<Button
    className="flex-1"
    variant="default"
    onClick={() => window.open("https://goo.gl/maps/YOUR_LINK", "_blank")}
>
    <ExternalLink className="mr-2 h-4 w-4" />
    Ver en Google Maps
</Button>
```

## 📧 Connect RSVP Form

In `app/page.tsx`, update the `handleRSVPSubmit` function:

```typescript
const handleRSVPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with Convex mutation or API call
    try {
        // await createRSVP(rsvpForm);
        alert("¡Gracias por confirmar tu asistencia!");
    } catch (error) {
        alert("Error al enviar. Por favor intenta de nuevo.");
    }
};
```

## 🎨 Add More Sections

To add a new section:

1. Add to navbar in `components/wedding-navbar.tsx`:

```tsx
const navItems = [
    // ... existing items
    { label: "NUEVA SECCIÓN", href: "#nueva" },
];
```

2. Add section in `app/page.tsx`:

```tsx
<section id="nueva" className="flex min-h-screen items-center py-20 px-4">
    <div className="container mx-auto">
        <h2 className="font-serif text-4xl font-bold">Nueva Sección</h2>
        {/* Your content */}
    </div>
</section>
```

## 🔒 Protect Admin Dashboard

Add authentication to `/admin`:

1. Install next-auth or use Convex auth
2. Create a middleware or check in the page component
3. Redirect unauthorized users

Example with basic check:

```tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
    const router = useRouter();

    useEffect(() => {
        // Add your auth check here
        const isAuthenticated = false; // Replace with real check
        if (!isAuthenticated) {
            router.push("/");
        }
    }, [router]);

    // ... rest of component
}
```

## 🎨 Customize Fonts

In `app/layout.tsx`, change the fonts:

```typescript
// Current fonts
import { Geist, Geist_Mono } from "next/font/google";

// Change to any Google Font
import { Playfair_Display, Open_Sans } from "next/font/google";

const serif = Playfair_Display({
    variable: "--font-serif",
    subsets: ["latin"],
});

const sans = Open_Sans({
    variable: "--font-sans",
    subsets: ["latin"],
});
```

## 📱 Improve Mobile Navigation

The current navbar shows "Menu" text on mobile. To add a proper mobile menu:

1. Install the sheet component:

```bash
bunx shadcn@latest add sheet
```

2. Update `components/wedding-navbar.tsx` to use a Sheet/Drawer for mobile navigation

## 🎯 Add Analytics

Add Google Analytics or Vercel Analytics:

```bash
npm install @vercel/analytics
```

In `app/layout.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
```

## 🎨 Add Custom Animations

Use Framer Motion for animations:

```bash
bun add framer-motion
```

Example usage:

```tsx
import { motion } from "framer-motion";

<motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
>
    {/* Section content */}
</motion.section>;
```

---

**Need help?** Check the [IMPLEMENTATION.md](./IMPLEMENTATION.md) for full project details.
