"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import {
    mockGuests,
    mockGifts,
    getGuestStats,
    getGiftStats,
    type RSVPStatus,
    type GiftStatus,
} from "@/lib/mock-data";
import {
    Users,
    CheckCircle2,
    Clock,
    XCircle,
    Gift,
    DollarSign,
    Package,
    Heart,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const getRSVPStatusBadge = (status: RSVPStatus) => {
    switch (status) {
        case "confirmed":
            return (
                <Badge variant="default" className="bg-green-500">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Confirmado
                </Badge>
            );
        case "pending":
            return (
                <Badge variant="secondary">
                    <Clock className="mr-1 h-3 w-3" />
                    Pendiente
                </Badge>
            );
        case "declined":
            return (
                <Badge variant="outline">
                    <XCircle className="mr-1 h-3 w-3" />
                    Declinó
                </Badge>
            );
    }
};

const getGiftStatusBadge = (status: GiftStatus) => {
    switch (status) {
        case "available":
            return <Badge variant="default">Disponible</Badge>;
        case "reserved":
            return <Badge variant="secondary">Reservado</Badge>;
        case "purchased":
            return (
                <Badge
                    variant="outline"
                    className="bg-green-50 dark:bg-green-950"
                >
                    Comprado
                </Badge>
            );
    }
};

export default function AdminDashboard() {
    const guestStats = getGuestStats();
    const giftStats = getGiftStats();

    return (
        <div className="min-h-screen bg-muted/20">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-3">
                        <Heart className="h-6 w-6 fill-primary text-primary" />
                        <div>
                            <h1 className="text-lg font-semibold">
                                Panel de la Boda
                            </h1>
                            <p className="text-xs text-muted-foreground">
                                Administración y estadísticas
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <Button variant="outline" size="sm">
                                Ver Landing Page
                            </Button>
                        </Link>
                        <ModeToggle />
                    </div>
                </div>
            </header>

            <main className="container mx-auto py-8 px-4 space-y-8">
                {/* Stats Overview */}
                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Resumen General</h2>
                        <p className="text-muted-foreground">
                            Vista rápida de confirmaciones y regalos
                        </p>
                    </div>

                    {/* Guest Stats */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Invitados
                                </CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {guestStats.total}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Personas en la lista
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Confirmados
                                </CardTitle>
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {guestStats.confirmed}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    +{guestStats.totalPlusOnes} acompañantes ={" "}
                                    {guestStats.totalExpected} total
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Pendientes
                                </CardTitle>
                                <Clock className="h-4 w-4 text-yellow-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {guestStats.pending}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Sin confirmar aún
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Declinaron
                                </CardTitle>
                                <XCircle className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {guestStats.declined}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    No podrán asistir
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Gift Stats */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Regalos
                                </CardTitle>
                                <Gift className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {giftStats.total}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    En la lista
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Comprados
                                </CardTitle>
                                <Package className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {giftStats.purchased}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    $
                                    {giftStats.purchasedValue.toLocaleString(
                                        "es-MX"
                                    )}{" "}
                                    MXN
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Reservados
                                </CardTitle>
                                <Clock className="h-4 w-4 text-yellow-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {giftStats.reserved}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Por comprar
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Disponibles
                                </CardTitle>
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {giftStats.available}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Valor total: $
                                    {giftStats.totalValue.toLocaleString(
                                        "es-MX"
                                    )}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <Separator />

                {/* Guests Table */}
                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">
                            Lista de Invitados
                        </h2>
                        <p className="text-muted-foreground">
                            Todos los invitados y su estado de confirmación
                        </p>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Invitados ({mockGuests.length})
                            </CardTitle>
                            <CardDescription>
                                Gestión de confirmaciones y acompañantes
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nombre</TableHead>
                                        <TableHead>Lado</TableHead>
                                        <TableHead>Estado</TableHead>
                                        <TableHead>Acompañantes</TableHead>
                                        <TableHead>Restricciones</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockGuests.map((guest) => (
                                        <TableRow key={guest.id}>
                                            <TableCell className="font-medium">
                                                {guest.name}
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline">
                                                    {guest.side === "bride"
                                                        ? "Novia"
                                                        : guest.side === "groom"
                                                          ? "Novio"
                                                          : "Ambos"}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                {getRSVPStatusBadge(
                                                    guest.rsvpStatus
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                {guest.plusOnes > 0 ? (
                                                    <span className="text-sm">
                                                        +{guest.plusOnes}
                                                    </span>
                                                ) : (
                                                    <span className="text-sm text-muted-foreground">
                                                        -
                                                    </span>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                {guest.dietaryRestrictions ? (
                                                    <span className="text-sm">
                                                        {
                                                            guest.dietaryRestrictions
                                                        }
                                                    </span>
                                                ) : (
                                                    <span className="text-sm text-muted-foreground">
                                                        Ninguna
                                                    </span>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                <Separator />

                {/* Gifts Table */}
                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Mesa de Regalos</h2>
                        <p className="text-muted-foreground">
                            Estado de los regalos en la lista
                        </p>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Regalos ({mockGifts.length})</CardTitle>
                            <CardDescription>
                                Seguimiento de regalos reservados y comprados
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Regalo</TableHead>
                                        <TableHead>Precio</TableHead>
                                        <TableHead>Estado</TableHead>
                                        <TableHead>
                                            Comprado/Reservado por
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockGifts.map((gift) => (
                                        <TableRow key={gift.id}>
                                            <TableCell>
                                                <div>
                                                    <p className="font-medium">
                                                        {gift.name}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {gift.description}
                                                    </p>
                                                </div>
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                $
                                                {gift.price.toLocaleString(
                                                    "es-MX"
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                {getGiftStatusBadge(
                                                    gift.status
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                {gift.purchasedBy ? (
                                                    <span className="text-sm">
                                                        {gift.purchasedBy}
                                                    </span>
                                                ) : gift.reservedBy ? (
                                                    <span className="text-sm text-muted-foreground">
                                                        {gift.reservedBy}
                                                    </span>
                                                ) : (
                                                    <span className="text-sm text-muted-foreground">
                                                        -
                                                    </span>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t py-6 px-4 mt-12">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>Panel de Administración • Datos de demostración</p>
                </div>
            </footer>
        </div>
    );
}
