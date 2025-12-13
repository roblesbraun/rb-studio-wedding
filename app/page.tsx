"use client";

import { WeddingNavbar } from "@/components/wedding-navbar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemTitle,
    ItemFooter,
} from "@/components/ui/item";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import {
    Calendar,
    MapPin,
    Clock,
    Hotel,
    Gift,
    Shirt,
    Mail,
    Phone,
    ExternalLink,
} from "lucide-react";
import {
    weddingInfo,
    mockItinerary,
    mockHotels,
    mockGifts,
} from "@/lib/mock-data";
import { useState } from "react";

export default function Home() {
    const [rsvpForm, setRsvpForm] = useState({
        name: "",
        email: "",
        attendance: "",
        plusOnes: "0",
        dietary: "",
    });

    // Auth state
    const [isAuthed, setIsAuthed] = useState(false);
    const [authDialogOpen, setAuthDialogOpen] = useState(false);
    const [pendingAction, setPendingAction] = useState<"rsvp" | "gift" | null>(null);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const handleRSVPSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isAuthed) {
            setPendingAction("rsvp");
            setAuthDialogOpen(true);
            return;
        }
        console.log("RSVP submitted:", rsvpForm);
        alert("¡Gracias por confirmar tu asistencia! (Demo - no se guardó)");
    };

    const handleGiftContribute = () => {
        if (!isAuthed) {
            setPendingAction("gift");
            setAuthDialogOpen(true);
            return;
        }
        // Placeholder for future Stripe integration
        alert("Contribución de regalo (próximamente con Stripe)");
    };

    const handleSendOTP = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for OTP send logic
        console.log("Sending OTP to:", phoneNumber);
        setOtpSent(true);
        alert(`Código OTP enviado a ${phoneNumber} (Demo)`);
    };

    const handleVerifyOTP = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for OTP verification
        console.log("Verifying OTP:", otpCode);
        setIsAuthed(true);
        setAuthDialogOpen(false);
        alert("¡Autenticación exitosa! (Demo)");
        
        // Resume pending action
        if (pendingAction === "rsvp") {
            // The form will now submit on next attempt
            console.log("Ready to submit RSVP");
        } else if (pendingAction === "gift") {
            alert("Contribución de regalo (próximamente con Stripe)");
        }
        setPendingAction(null);
        setOtpSent(false);
        setPhoneNumber("");
        setOtpCode("");
    };

    return (
        <div className="min-h-screen">
            <WeddingNavbar />

            {/* Hero Section */}
            <section className="relative flex min-h-screen items-center justify-center bg-linear-to-b from-background to-muted/20 px-4">
                <div className="container mx-auto text-center">
                    <div className="mx-auto max-w-3xl space-y-8">
                        <div className="space-y-4">
                            <h1 className="font-serif text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl">
                                {weddingInfo.bride} & {weddingInfo.groom}
                            </h1>
                            <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                <Calendar className="h-5 w-5" />
                                <p className="text-xl">{weddingInfo.date}</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                <MapPin className="h-5 w-5" />
                                <p className="text-lg">{weddingInfo.venue}</p>
                            </div>
                        </div>
                        <Separator className="mx-auto w-24" />
                        <p className="text-lg text-muted-foreground">
                            Nos complace invitarte a celebrar nuestro día
                            especial
                        </p>
                        <Button
                            size="lg"
                            onClick={() => {
                                document
                                    .getElementById("rsvp")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="text-lg"
                        >
                            Confirmar Asistencia
                        </Button>
                    </div>
                </div>
            </section>

            {/* Itinerario Section */}
            <section
                id="itinerario"
                className="flex min-h-screen items-center py-20"
            >
                <div className="w-full space-y-12">
                    <div className="container mx-auto px-4">
                        <div className="text-center space-y-4">
                            <h2 className="font-serif text-4xl font-bold sm:text-5xl">
                                Itinerario
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Programa del día de nuestra boda
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                        {mockItinerary.map((event) => (
                            <Card
                                key={event.id}
                                className="flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px] md:min-h-[260px]"
                            >
                                <CardContent className="flex flex-col items-center justify-center py-8">
                                    <div className="text-5xl sm:text-6xl md:text-7xl font-semibold">
                                        {event.time}
                                    </div>
                                    <div className="mt-4 text-sm sm:text-base tracking-[0.25em] uppercase">
                                        {event.title}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fotos de los novios Section */}
            <section className="flex min-h-screen items-center bg-muted/10 py-20 px-4">
                <div className="container mx-auto">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-6 md:grid-cols-3">
                            {/* Photo Card 1 */}
                            <Card className="overflow-hidden border-0 p-0 gap-0">
                                <CardContent className="p-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop"
                                        alt="Bride and groom walking on a hill"
                                        className="h-[500px] w-full object-cover"
                                    />
                                </CardContent>
                            </Card>

                            {/* Photo Card 2 */}
                            <Card className="overflow-hidden border-0 p-0 gap-0">
                                <CardContent className="p-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop"
                                        alt="Wedding rings on wooden box with flowers"
                                        className="h-[500px] w-full object-cover"
                                    />
                                </CardContent>
                            </Card>

                            {/* Photo Card 3 */}
                            <Card className="overflow-hidden border-0 p-0 gap-0">
                                <CardContent className="p-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop"
                                        alt="Newly married couple walking through a field"
                                        className="h-[500px] w-full object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ubicación Section */}
            <section
                id="ubicacion"
                className="flex min-h-screen items-center bg-muted/20 py-20 px-4"
            >
                <div className="container mx-auto">
                    <div className="mx-auto max-w-6xl space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="font-serif text-4xl font-bold sm:text-5xl">
                                Ubicación
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Cómo llegar a nuestra celebración
                            </p>
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5" />
                                    {weddingInfo.venue}
                                </CardTitle>
                                <CardDescription>
                                    {weddingInfo.address}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="overflow-hidden rounded-lg border">
                                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                                        {/* Venue Image */}
                                        <div className="aspect-video md:aspect-4/3 w-full">
                                            <img
                                                src="https://cdn0.bodas.com.mx/vendor/5031/3_2/960/jpg/margaty-4_5_145031-175683633586796.jpeg"
                                                alt="Venue photo"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        {/* Map Placeholder */}
                                        <div className="aspect-video md:aspect-4/3 w-full bg-muted flex items-center justify-center">
                                            <div className="text-center space-y-2">
                                                <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">
                                                    Mapa del lugar
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Button
                                        className="flex-1"
                                        variant="default"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Ver en Google Maps
                                    </Button>
                                    <Button
                                        className="flex-1"
                                        variant="outline"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Ver en Waze
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Hospedaje Section */}
            <section
                id="hospedaje"
                className="flex min-h-screen items-center py-20 px-4"
            >
                <div className="container mx-auto">
                    <div className="mx-auto max-w-4xl space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="font-serif text-4xl font-bold sm:text-5xl">
                                Hospedaje
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Hoteles recomendados cerca del venue
                            </p>
                        </div>
                        {(() => {
                            const HospedajeCard = ({
                                hotel,
                            }: {
                                hotel: (typeof mockHotels)[number];
                            }) => (
                                <Card className="h-full overflow-hidden flex flex-col">
                                    <div className="w-full aspect-video bg-muted/30 overflow-hidden">
                                        <img
                                            src={hotel.imageUrl}
                                            alt={hotel.name}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Hotel className="h-5 w-5 shrink-0" />
                                            <span>{hotel.name}</span>
                                        </CardTitle>
                                        <CardDescription>
                                            {hotel.distance}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex flex-col gap-4 grow">
                                        <p className="text-sm text-muted-foreground">
                                            {hotel.description}
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm">
                                                <span className="font-semibold">
                                                    Precio:
                                                </span>
                                                <span className="text-muted-foreground">
                                                    {hotel.priceRange}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Phone className="h-4 w-4 shrink-0" />
                                                <span className="text-muted-foreground">
                                                    {hotel.phone}
                                                </span>
                                            </div>
                                        </div>
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="w-full mt-auto"
                                            size="sm"
                                        >
                                            <a
                                                href={hotel.website}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Ver sitio web
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            );

                            return (
                                <>
                                    {/* Mobile carousel */}
                                    <div className="md:hidden">
                                        <Carousel
                                            opts={{ align: "start" }}
                                            className="w-full"
                                        >
                                            <CarouselContent>
                                                {mockHotels.map((hotel) => (
                                                    <CarouselItem
                                                        key={hotel.id}
                                                        className="sm:basis-4/5"
                                                    >
                                                        <HospedajeCard
                                                            hotel={hotel}
                                                        />
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious className="left-2" />
                                            <CarouselNext className="right-2" />
                                        </Carousel>
                                    </div>

                                    {/* Desktop grid */}
                                    <div className="hidden md:grid gap-6 md:grid-cols-2">
                                        {mockHotels.map((hotel) => (
                                            <HospedajeCard
                                                key={hotel.id}
                                                hotel={hotel}
                                            />
                                        ))}
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                </div>
            </section>

            {/* Código de Vestimenta Section */}
            <section
                id="vestimenta"
                className="flex min-h-screen items-center py-20 px-4"
            >
                <div className="container mx-auto">
                    <div className="mx-auto max-w-4xl space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="font-serif text-4xl font-bold sm:text-5xl">
                                Código de Vestimenta
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Sugerencias para vestir en nuestra boda
                            </p>
                        </div>
                        <Card className="mx-auto max-w-2xl">
                            <CardHeader className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Shirt className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-2xl">
                                    {weddingInfo.dressCode}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-center text-muted-foreground">
                                    {weddingInfo.dressCodeDescription}
                                </p>
                                <Separator />
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">
                                            Sugerencias:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary">
                                                Formal
                                            </Badge>
                                            <Badge variant="secondary">
                                                Colores claros
                                            </Badge>
                                            <Badge variant="secondary">
                                                Vestidos largos
                                            </Badge>
                                            <Badge variant="secondary">
                                                Traje
                                            </Badge>
                                            <Badge variant="secondary">
                                                Corbata opcional
                                            </Badge>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">
                                            Evitar:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="outline">
                                                Blanco
                                            </Badge>
                                            <Badge variant="outline">
                                                Jeans
                                            </Badge>
                                            <Badge variant="outline">
                                                Deportivo
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Mesa de Regalos Section */}
            <section
                id="regalos"
                className="flex min-h-screen items-center bg-muted/20 py-20 px-4"
            >
                <div className="container mx-auto">
                    <div className="mx-auto max-w-4xl space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="font-serif text-4xl font-bold sm:text-5xl">
                                Mesa de Regalos
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Tu presencia es nuestro mejor regalo, pero si
                                deseas obsequiarnos algo...
                            </p>
                        </div>
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Nuestra lista de regalos
                                    </CardTitle>
                                    <CardDescription>
                                        Puedes contribuir con el monto que desees a cualquier regalo
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ScrollArea className="h-[420px] w-full rounded-md">
                                        <ItemGroup className="gap-3 p-1">
                                            {mockGifts.map((gift) => {
                                                const fundedPercentage = Math.min(
                                                    100,
                                                    (gift.fundedAmount / gift.price) * 100
                                                );
                                                return (
                                                    <Item
                                                        key={gift.id}
                                                        variant="outline"
                                                        size="sm"
                                                        className="flex-col items-start"
                                                    >
                                                        <div className="flex w-full items-start gap-2 sm:gap-3">
                                                            <ItemMedia variant="image" className="size-16 sm:size-20 shrink-0">
                                                                <Image
                                                                    src={gift.imageUrl || `https://avatar.vercel.sh/${gift.name}`}
                                                                    alt={gift.name}
                                                                    width={80}
                                                                    height={80}
                                                                    className="object-cover rounded"
                                                                />
                                                            </ItemMedia>
                                                            <ItemContent className="flex-1 min-h-16 sm:h-20 flex flex-col justify-between">
                                                                <div className="space-y-0">
                                                                    <ItemTitle className="line-clamp-1 text-xs sm:text-sm leading-tight">
                                                                        {gift.name}
                                                                    </ItemTitle>
                                                                    <ItemDescription className="line-clamp-1 text-[10px] sm:text-xs leading-tight">
                                                                        {gift.description}
                                                                    </ItemDescription>
                                                                    <p className="text-[10px] sm:text-xs font-semibold leading-tight">
                                                                        ${gift.price.toLocaleString("es-MX")} MXN
                                                                    </p>
                                                                </div>
                                                                <Badge
                                                                    variant={
                                                                        gift.status === "available"
                                                                            ? "default"
                                                                            : gift.status === "reserved"
                                                                              ? "secondary"
                                                                              : "outline"
                                                                    }
                                                                    className="text-[10px] w-fit px-1.5 sm:px-1.5 py-0.5 sm:py-0 h-auto sm:h-4 leading-none"
                                                                >
                                                                    {gift.status === "available"
                                                                        ? "Disponible"
                                                                        : gift.status === "reserved"
                                                                          ? "Reservado"
                                                                          : "Comprado"}
                                                                </Badge>
                                                            </ItemContent>
                                                            <div className="flex flex-col items-end justify-center min-h-16 sm:h-20">
                                                                <Button
                                                                    size="sm"
                                                                    variant={fundedPercentage >= 100 ? "outline" : "default"}
                                                                    disabled={fundedPercentage >= 100}
                                                                    onClick={handleGiftContribute}
                                                                    className="h-7 w-7 sm:h-8 sm:w-8 p-0"
                                                                >
                                                                    <Gift className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <ItemFooter className="w-full mt-2 gap-1">
                                                            <div className="flex-1 space-y-0.5">
                                                                <Progress value={fundedPercentage} className="h-1.5" />
                                                                <p className="text-xs text-muted-foreground">
                                                                    ${gift.fundedAmount.toLocaleString("es-MX")} / ${gift.price.toLocaleString("es-MX")} MXN ({fundedPercentage.toFixed(0)}%)
                                                                </p>
                                                            </div>
                                                        </ItemFooter>
                                                    </Item>
                                                );
                                            })}
                                        </ItemGroup>
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* RSVP Section */}
            <section
                id="rsvp"
                className="flex min-h-screen items-center bg-muted/20 py-20 px-4"
            >
                <div className="container mx-auto">
                    <div className="mx-auto max-w-2xl space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="font-serif text-4xl font-bold sm:text-5xl">
                                RSVP
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Por favor confirma tu asistencia antes del 1 de
                                Mayo
                            </p>
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Confirma tu asistencia</CardTitle>
                                <CardDescription>
                                    Completa el formulario para hacernos saber
                                    si nos acompañarás
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form
                                    onSubmit={handleRSVPSubmit}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <Label htmlFor="name">
                                            Nombre completo
                                        </Label>
                                        <Input
                                            id="name"
                                            placeholder="Tu nombre"
                                            value={rsvpForm.name}
                                            onChange={(e) =>
                                                setRsvpForm({
                                                    ...rsvpForm,
                                                    name: e.target.value,
                                                })
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">
                                            Correo electrónico
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="tu@email.com"
                                            value={rsvpForm.email}
                                            onChange={(e) =>
                                                setRsvpForm({
                                                    ...rsvpForm,
                                                    email: e.target.value,
                                                })
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="attendance">
                                            ¿Asistirás?
                                        </Label>
                                        <Select
                                            value={rsvpForm.attendance}
                                            onValueChange={(value) =>
                                                setRsvpForm({
                                                    ...rsvpForm,
                                                    attendance: value,
                                                })
                                            }
                                            required
                                        >
                                            <SelectTrigger id="attendance">
                                                <SelectValue placeholder="Selecciona una opción" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="yes">
                                                    Sí, asistiré con gusto
                                                </SelectItem>
                                                <SelectItem value="no">
                                                    No podré asistir
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    {rsvpForm.attendance === "yes" && (
                                        <>
                                            <div className="space-y-2">
                                                <Label htmlFor="plusOnes">
                                                    ¿Cuántos acompañantes?
                                                </Label>
                                                <Select
                                                    value={rsvpForm.plusOnes}
                                                    onValueChange={(value) =>
                                                        setRsvpForm({
                                                            ...rsvpForm,
                                                            plusOnes: value,
                                                        })
                                                    }
                                                >
                                                    <SelectTrigger id="plusOnes">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="0">
                                                            Solo yo
                                                        </SelectItem>
                                                        <SelectItem value="1">
                                                            1 acompañante
                                                        </SelectItem>
                                                        <SelectItem value="2">
                                                            2 acompañantes
                                                        </SelectItem>
                                                        <SelectItem value="3">
                                                            3 acompañantes
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="dietary">
                                                    Restricciones alimentarias
                                                    (opcional)
                                                </Label>
                                                <Input
                                                    id="dietary"
                                                    placeholder="Ej: Vegetariano, sin gluten, etc."
                                                    value={rsvpForm.dietary}
                                                    onChange={(e) =>
                                                        setRsvpForm({
                                                            ...rsvpForm,
                                                            dietary:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                        </>
                                    )}
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        size="lg"
                                    >
                                        <Mail className="mr-2 h-4 w-4" />
                                        Enviar Confirmación
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Auth Dialog */}
            <Sheet open={authDialogOpen} onOpenChange={setAuthDialogOpen}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Iniciar sesión</SheetTitle>
                        <SheetDescription>
                            Para {pendingAction === "rsvp" ? "confirmar tu asistencia" : "contribuir a un regalo"}, necesitamos verificar tu identidad.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="mt-6 space-y-6">
                        {!otpSent ? (
                            <form onSubmit={handleSendOTP} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="phone">
                                        Número de teléfono
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+52 123 456 7890"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Te enviaremos un código de verificación
                                    </p>
                                </div>
                                <Button type="submit" className="w-full">
                                    <Phone className="mr-2 h-4 w-4" />
                                    Enviar código
                                </Button>
                            </form>
                        ) : (
                            <form onSubmit={handleVerifyOTP} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="otp">
                                        Código de verificación
                                    </Label>
                                    <Input
                                        id="otp"
                                        type="text"
                                        placeholder="123456"
                                        value={otpCode}
                                        onChange={(e) => setOtpCode(e.target.value)}
                                        required
                                        maxLength={6}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Ingresa el código enviado a {phoneNumber}
                                    </p>
                                </div>
                                <Button type="submit" className="w-full">
                                    Verificar
                                </Button>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    className="w-full"
                                    onClick={() => {
                                        setOtpSent(false);
                                        setOtpCode("");
                                    }}
                                >
                                    Cambiar número
                                </Button>
                            </form>
                        )}
                    </div>
                </SheetContent>
            </Sheet>

            {/* Footer */}
            <footer className="border-t py-8 px-4">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>
                        {weddingInfo.bride} & {weddingInfo.groom} •{" "}
                        {weddingInfo.date}
                    </p>
                    <p className="mt-2">
                        ¡Esperamos celebrar este día especial contigo!
                    </p>
                </div>
            </footer>
        </div>
    );
}
