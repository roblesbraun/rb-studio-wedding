// Mock data types and constants for wedding app

export type RSVPStatus = "confirmed" | "pending" | "declined";
export type GiftStatus = "available" | "reserved" | "purchased";
export type GuestSide = "bride" | "groom" | "both";

export interface Guest {
    id: string;
    name: string;
    side: GuestSide;
    email?: string;
    phone?: string;
    plusOnes: number;
    rsvpStatus: RSVPStatus;
    dietaryRestrictions?: string;
}

export interface Gift {
    id: string;
    name: string;
    description: string;
    price: number;
    status: GiftStatus;
    reservedBy?: string;
    purchasedBy?: string;
    imageUrl?: string;
    fundedAmount: number;
}

export interface WeddingEvent {
    id: string;
    title: string;
    time: string;
    description: string;
    location?: string;
}

export interface Hotel {
    id: string;
    name: string;
    distance: string;
    priceRange: string;
    phone: string;
    website: string;
    description: string;
    imageUrl: string;
}

// Mock guests data
export const mockGuests: Guest[] = [
    {
        id: "1",
        name: "María García",
        side: "bride",
        email: "maria@example.com",
        plusOnes: 1,
        rsvpStatus: "confirmed",
        dietaryRestrictions: "Vegetariana",
    },
    {
        id: "2",
        name: "Juan Pérez",
        side: "groom",
        email: "juan@example.com",
        plusOnes: 0,
        rsvpStatus: "confirmed",
    },
    {
        id: "3",
        name: "Ana Martínez",
        side: "bride",
        email: "ana@example.com",
        plusOnes: 2,
        rsvpStatus: "pending",
    },
    {
        id: "4",
        name: "Carlos López",
        side: "groom",
        email: "carlos@example.com",
        plusOnes: 1,
        rsvpStatus: "confirmed",
    },
    {
        id: "5",
        name: "Laura Sánchez",
        side: "both",
        email: "laura@example.com",
        plusOnes: 0,
        rsvpStatus: "declined",
    },
    {
        id: "6",
        name: "Roberto Fernández",
        side: "groom",
        email: "roberto@example.com",
        plusOnes: 1,
        rsvpStatus: "pending",
    },
];

// Mock gifts data
export const mockGifts: Gift[] = [
    {
        id: "1",
        name: "Juego de sábanas de lujo",
        description: "Sábanas de algodón egipcio 600 hilos",
        price: 1500,
        status: "purchased",
        purchasedBy: "María García",
        fundedAmount: 1500,
        imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop",
    },
    {
        id: "2",
        name: "Cafetera espresso",
        description: "Cafetera automática de alta gama",
        price: 8500,
        status: "reserved",
        reservedBy: "Juan Pérez",
        fundedAmount: 3000,
        imageUrl: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
    },
    {
        id: "3",
        name: "Set de toallas",
        description: "6 toallas de baño premium",
        price: 1200,
        status: "available",
        fundedAmount: 0,
        imageUrl: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=400&h=400&fit=crop",
    },
    {
        id: "4",
        name: "Batidora de pie",
        description: "Batidora profesional con accesorios",
        price: 4500,
        status: "available",
        fundedAmount: 1575,
        imageUrl: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=400&fit=crop",
    },
    {
        id: "5",
        name: "Vajilla 12 personas",
        description: "Vajilla de porcelana fina",
        price: 3200,
        status: "purchased",
        purchasedBy: "Carlos López",
        fundedAmount: 3200,
        imageUrl: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=400&fit=crop",
    },
    {
        id: "6",
        name: "Aspiradora robot",
        description: "Robot de limpieza inteligente",
        price: 6800,
        status: "reserved",
        reservedBy: "Ana Martínez",
        fundedAmount: 2380,
        imageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
    },
];

// Mock wedding events/itinerary
export const mockItinerary: WeddingEvent[] = [
    {
        id: "1",
        title: "Ceremonia",
        time: "15:00",
        description: "",
        location: "",
    },
    {
        id: "2",
        title: "Coctel",
        time: "16:30",
        description: "",
        location: "",
    },
    {
        id: "3",
        title: "Cena & Fiesta",
        time: "15:00",
        description: "",
        location: "",
    },
    {
        id: "4",
        title: "Tornaboda",
        time: "16:30",
        description: "",
        location: "",
    },
];

// Mock hotels
export const mockHotels: Hotel[] = [
    {
        id: "1",
        name: "Hotel Boutique Casa Real",
        distance: "2 km del venue",
        priceRange: "$2,500 - $3,500 MXN",
        phone: "+52 55 1234 5678",
        website: "https://hotelcasareal.com",
        description: "Hotel boutique con encanto colonial y desayuno incluido",
        imageUrl:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%25' stop-color='%23fafafa'/><stop offset='100%25' stop-color='%23e4e4e7'/></linearGradient></defs><rect width='100%25' height='100%25' fill='url(%23g)'/><g fill='none' stroke='%23d4d4d8' stroke-width='6'><rect x='72' y='72' width='1056' height='531' rx='28'/><path d='M160 500 L410 310 L560 430 L760 240 L1040 520'/></g><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2352525b' font-family='ui-sans-serif,system-ui,-apple-system' font-size='44'>Hotel%20Boutique%20Casa%20Real</text></svg>",
    },
    {
        id: "2",
        name: "Grand Hotel Plaza",
        distance: "5 km del venue",
        priceRange: "$1,800 - $2,800 MXN",
        phone: "+52 55 8765 4321",
        website: "https://grandhotelplaza.com",
        description: "Hotel moderno con spa y alberca",
        imageUrl:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%25' stop-color='%23fafafa'/><stop offset='100%25' stop-color='%23e4e4e7'/></linearGradient></defs><rect width='100%25' height='100%25' fill='url(%23g)'/><g fill='none' stroke='%23d4d4d8' stroke-width='6'><rect x='72' y='72' width='1056' height='531' rx='28'/><path d='M160 500 L410 310 L560 430 L760 240 L1040 520'/></g><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2352525b' font-family='ui-sans-serif,system-ui,-apple-system' font-size='44'>Grand%20Hotel%20Plaza</text></svg>",
    },
];

// Wedding info constants
export const weddingInfo = {
    bride: "Mane",
    groom: "Franco",
    date: "7 de Noviembre, 2025",
    venue: "Jardín de los Sueños",
    address: "Av. Reforma 123, Ciudad de México",
    dressCode: "Formal",
    dressCodeDescription:
        "Se sugiere vestimenta formal. Colores claros y pasteles son bienvenidos.",
};

// Stats for admin dashboard
export const getGuestStats = () => {
    const total = mockGuests.length;
    const confirmed = mockGuests.filter(
        (g) => g.rsvpStatus === "confirmed"
    ).length;
    const pending = mockGuests.filter((g) => g.rsvpStatus === "pending").length;
    const declined = mockGuests.filter(
        (g) => g.rsvpStatus === "declined"
    ).length;
    const totalPlusOnes = mockGuests.reduce((sum, g) => sum + g.plusOnes, 0);

    return {
        total,
        confirmed,
        pending,
        declined,
        totalPlusOnes,
        totalExpected: confirmed + totalPlusOnes,
    };
};

export const getGiftStats = () => {
    const total = mockGifts.length;
    const available = mockGifts.filter((g) => g.status === "available").length;
    const reserved = mockGifts.filter((g) => g.status === "reserved").length;
    const purchased = mockGifts.filter((g) => g.status === "purchased").length;
    const totalValue = mockGifts.reduce((sum, g) => sum + g.price, 0);
    const purchasedValue = mockGifts
        .filter((g) => g.status === "purchased")
        .reduce((sum, g) => sum + g.price, 0);

    return {
        total,
        available,
        reserved,
        purchased,
        totalValue,
        purchasedValue,
    };
};
