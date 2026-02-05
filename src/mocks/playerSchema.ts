import { z } from "zod";

export const playerSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  steamName: z.string().min(1),
});

export type PlayerInput = z.infer<typeof playerSchema>;
