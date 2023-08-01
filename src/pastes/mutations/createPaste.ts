import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreatePasteSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreatePasteSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const paste = await db.paste.create({ data: input })

    return paste
  }
)
