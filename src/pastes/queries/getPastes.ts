import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetPastesInput
  extends Pick<Prisma.PasteFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetPastesInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: pastes,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.paste.count({ where }),
      query: (paginateArgs) => db.paste.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      pastes,
      nextPage,
      hasMore,
      count,
    }
  }
)
