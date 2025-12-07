# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Start the Development Server

```bash
bun dev
```

Visit:

- **Landing Page**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin

### 2. Customize Your Wedding Info

Edit `lib/mock-data.ts` and update:

- Couple names
- Wedding date
- Venue information
- Itinerary events
- Hotel recommendations

### 3. Deploy

```bash
# Build for production
bun run build

# Deploy to Vercel (recommended)
vercel deploy
```

## 📱 What You'll See

### Landing Page (/)

- ✅ Hero section with couple names and date
- ✅ Sticky navigation bar with smooth scrolling
- ✅ 6 full-screen sections:
    - Itinerario (timeline)
    - Ubicación (venue & map)
    - Hospedaje (hotels)
    - Mesa de Regalos (gift registry)
    - Código de Vestimenta (dress code)
    - RSVP (confirmation form)
- ✅ Dark/light mode support
- ✅ Mobile responsive

### Admin Dashboard (/admin)

- ✅ Guest statistics (total, confirmed, pending, declined)
- ✅ Gift statistics (available, reserved, purchased)
- ✅ Guest list table with RSVP status
- ✅ Gift registry table with status tracking
- ✅ All data is currently mock data

## 🎨 Key Files to Edit

| File                            | Purpose                                        |
| ------------------------------- | ---------------------------------------------- |
| `lib/mock-data.ts`              | Wedding info, guests, gifts, hotels, itinerary |
| `app/page.tsx`                  | Landing page sections and content              |
| `app/admin/page.tsx`            | Admin dashboard layout                         |
| `components/wedding-navbar.tsx` | Navigation bar and logo                        |
| `app/globals.css`               | Colors and global styles                       |

## 🔧 Common Tasks

### Change Couple Names

```typescript
// lib/mock-data.ts
export const weddingInfo = {
    bride: "Your Name",
    groom: "Partner Name",
    // ...
};
```

### Add More Itinerary Events

```typescript
// lib/mock-data.ts
export const mockItinerary: WeddingEvent[] = [
    {
        id: "5",
        title: "After Party",
        time: "01:00",
        description: "Continue the celebration",
        location: "Lounge Bar",
    },
];
```

### Update Hotel Recommendations

```typescript
// lib/mock-data.ts
export const mockHotels: Hotel[] = [
    {
        id: "1",
        name: "Your Hotel",
        distance: "1 km del venue",
        priceRange: "$1,500 - $2,500 MXN",
        phone: "+52 55 1234 5678",
        website: "https://hotel.com",
        description: "Description here",
    },
];
```

### Change Logo

```tsx
// components/wedding-navbar.tsx
// Replace the Heart icon and M & F text with your own logo
<div className="flex items-center gap-2">
    <Heart className="h-6 w-6 fill-primary text-primary" />
    <span className="text-xl font-serif font-semibold">M & F</span>
</div>
```

## 📚 Documentation

- **[IMPLEMENTATION.md](./IMPLEMENTATION.md)** - Full technical details
- **[CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)** - Detailed customization guide
- **[README.md](./README.md)** - Project overview

## 🔄 Next Steps

1. **Customize Content**: Update all wedding information
2. **Add Real Links**: Connect Google Maps, Waze, gift registries
3. **Add Photos**: Create a photo gallery section
4. **Backend Integration**: Connect to Convex for real data
5. **Authentication**: Protect admin dashboard
6. **Email Notifications**: Send RSVP confirmations
7. **Deploy**: Push to production

## 🆘 Need Help?

Check the detailed guides:

- For technical details → [IMPLEMENTATION.md](./IMPLEMENTATION.md)
- For customization → [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)

## 🎯 Current Status

✅ **Complete Skeleton** - Ready for customization
✅ **All Components Installed** - shadcn/ui components ready
✅ **Mock Data** - Realistic sample data in place
✅ **Responsive Design** - Works on mobile and desktop
✅ **Dark Mode** - Theme switching enabled
✅ **Smooth Scrolling** - Navigation works perfectly

⏳ **To Be Added** (when you're ready)

- Real backend with Convex
- Authentication for admin
- Email notifications
- Photo gallery
- Real map integration
- Gift purchase flow

---

**You're all set!** Start customizing and make it yours! 🎉
