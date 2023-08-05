
import { z } from "zod";

export const CreatePastebackupSchema = z.object({
  string: z.string(),
  string: z.string(),
  dataName: z.string(),
  dataDesc: z.string(),
  dataContent: z.string(),
  // template: __fieldName__: z.__zodType__(),
});
export const UpdatePastebackupSchema = z.object({
  id: z.number(),
  // template: __fieldName__: z.__zodType__(),
});

export const DeletePastebackupSchema = z.object({
  id: z.number(),
});
