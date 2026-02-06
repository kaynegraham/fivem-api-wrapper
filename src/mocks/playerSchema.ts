import { z } from "zod";

// Basic schema use, would like to learn more about databases & their use in APIs
export const playerSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  steamName: z.string().min(1),
  ping: z.number(),
});

export type PlayerInput = z.infer<typeof playerSchema>;
