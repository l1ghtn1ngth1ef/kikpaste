import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetPastebackupsInput
  extends Pick<Prisma.PastebackupFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetPastebackupsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: pastebackups,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.pastebackup.count({ where }),
      query: (paginateArgs) => db.pastebackup.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      pastebackups,
      nextPage,
      hasMore,
      count,
    }
  }
)
