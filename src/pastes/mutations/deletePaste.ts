import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeletePasteSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeletePasteSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const paste = await db.paste.deleteMany({ where: { id } })

    return paste
  }
)
