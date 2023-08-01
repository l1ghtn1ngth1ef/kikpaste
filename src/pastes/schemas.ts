import { z } from "zod"

export const CreatePasteSchema = z.object({
  pasteDescription: z.string(),
  pasteName: z.string(),
  pasteContent: z.string(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdatePasteSchema = z.object({
  id: z.number(),
  // template: __fieldName__: z.__zodType__(),
})

export const DeletePasteSchema = z.object({
  id: z.number(),
})
