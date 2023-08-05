import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeletePastebackupSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeletePastebackupSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const pastebackup = await db.pastebackup.deleteMany({ where: { id } })

    return pastebackup
  }
)
