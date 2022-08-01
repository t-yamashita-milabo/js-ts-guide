import { z } from "zod";

export const ZUser = z.object({
  id: z.number(),
  name: z.string(),
  active: z.boolean(),
});

export type User = z.infer<typeof ZUser>;
