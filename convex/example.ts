import { query } from "./_generated/server";

// Example query function
// This will be available as api.example.get
export const get = query({
  args: {},
  handler: async (ctx) => {
    // Example: return a simple message
    return { message: "Hello from Convex!" };
  },
});

