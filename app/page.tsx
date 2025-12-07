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

    const handleRSVPSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("RSVP submitted:", rsvpForm);
        alert("¡Gracias por confirmar tu asistencia! (Demo - no se guardó)");
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
                className="flex min-h-screen items-center py-20 px-4"
            >
                <div className="container mx-auto">
                    <div className="mx-auto max-w-4xl space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="font-serif text-4xl font-bold sm:text-5xl">
                                Itinerario
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Programa del día de nuestra boda
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            {mockItinerary.map((event) => (
                                <Card key={event.id}>
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="space-y-1">
                                                <CardTitle>
                                                    {event.title}
                                                </CardTitle>
                                                <CardDescription>
                                                    {event.location}
                                                </CardDescription>
                                            </div>
                                            <div className="flex items-center gap-1 text-primary">
                                                <Clock className="h-4 w-4" />
                                                <span className="font-semibold">
                                                    {event.time}
                                                </span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            {event.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
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
                    <div className="mx-auto max-w-4xl space-y-12">
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
                                <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
                                    <div className="text-center space-y-2">
                                        <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
                                        <p className="text-sm text-muted-foreground">
                                            Mapa del lugar
                                        </p>
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
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {mockHotels.map((hotel) => (
                                <Card key={hotel.id}>
                                    <CardHeader>
                                        <CardTitle className="flex items-start gap-2">
                                            <Hotel className="h-5 w-5 mt-1 shrink-0" />
                                            <span>{hotel.name}</span>
                                        </CardTitle>
                                        <CardDescription>
                                            {hotel.distance}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
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
                                                <Phone className="h-4 w-4" />
                                                <span className="text-muted-foreground">
                                                    {hotel.phone}
                                                </span>
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                            size="sm"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Ver sitio web
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
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
                            <div className="grid gap-4 md:grid-cols-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Liverpool</CardTitle>
                                        <CardDescription>
                                            Mesa de regalos en línea
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button className="w-full">
                                            <Gift className="mr-2 h-4 w-4" />
                                            Ver Mesa de Regalos
                                        </Button>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Amazon</CardTitle>
                                        <CardDescription>
                                            Lista de deseos
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button className="w-full">
                                            <Gift className="mr-2 h-4 w-4" />
                                            Ver Lista
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Algunos regalos disponibles
                                    </CardTitle>
                                    <CardDescription>
                                        Vista previa de nuestra lista (solo para
                                        referencia)
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {mockGifts.slice(0, 4).map((gift) => (
                                            <div
                                                key={gift.id}
                                                className="flex items-start justify-between rounded-lg border p-4"
                                            >
                                                <div className="space-y-1">
                                                    <p className="font-medium">
                                                        {gift.name}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        $
                                                        {gift.price.toLocaleString(
                                                            "es-MX"
                                                        )}{" "}
                                                        MXN
                                                    </p>
                                                </div>
                                                <Badge
                                                    variant={
                                                        gift.status ===
                                                        "available"
                                                            ? "default"
                                                            : gift.status ===
                                                                "reserved"
                                                              ? "secondary"
                                                              : "outline"
                                                    }
                                                >
                                                    {gift.status === "available"
                                                        ? "Disponible"
                                                        : gift.status ===
                                                            "reserved"
                                                          ? "Reservado"
                                                          : "Comprado"}
                                                </Badge>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
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
