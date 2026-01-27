import { z } from "zod";

export const profileSchema = z.object({
    name: z.string().min(1).max(50),
    surname: z.string().min(1).max(50),
    file: z
    .instanceof(File)
    .nullable()
    .optional()
    .refine(
      (file) =>
        file === null ||
        file === undefined ||
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg"
    )
})