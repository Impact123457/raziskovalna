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
      file == null ||
      (
        ["image/jpeg", "image/jpg", "image/png"].includes(file.type) &&
        file.size <= 20 * 1024 * 1024
      )
    )
})