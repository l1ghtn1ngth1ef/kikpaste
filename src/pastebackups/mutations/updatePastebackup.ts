import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdatePastebackupSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdatePastebackupSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const pastebackup = await db.pastebackup.update({ where: { id }, data })

    return pastebackup
  }
)
