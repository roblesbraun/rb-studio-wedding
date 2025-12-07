This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 1. Set up Convex

First, set up your Convex backend:

```bash
bun run convex:dev
```

This will:
- Prompt you to log in with GitHub
- Create a Convex project
- Save your deployment URLs
- Create the `convex/_generated` folder with type-safe API definitions
- Start syncing your functions with your dev deployment

After running this command, you'll need to create a `.env.local` file with your Convex URL:

```bash
# .env.local
NEXT_PUBLIC_CONVEX_URL=your_convex_url_here
```

The Convex URL will be provided when you run `bunx convex dev`.

### 2. Run the Development Server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Convex Backend

Your Convex backend functions are in the `convex/` directory. See `convex/example.ts` for a sample query function.

- `bun run convex:dev` - Start Convex development mode
- `bun run convex:deploy` - Deploy your Convex functions to production

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
