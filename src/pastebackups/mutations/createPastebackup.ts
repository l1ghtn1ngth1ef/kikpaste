import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreatePastebackupSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreatePastebackupSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const pastebackup = await db.pastebackup.create({ data: input })

    return pastebackup
  }
)
