import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdatePasteSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdatePasteSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const paste = await db.paste.update({ where: { id }, data })

    return paste
  }
)
