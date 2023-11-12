import { z } from "zod";

const zNote = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Note = z.infer<typeof zNote>;
