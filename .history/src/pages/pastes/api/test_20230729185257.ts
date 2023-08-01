import { BlitzApiHandler } from "blitz"
import db from "db"

// Promise<T> -> T にするUtilityType
import Unpromise from "app/utils/Unpromise"
// string | string[] | undefined -> string | undefined にする関数
import parseQueryValue from "app/helpers/parseQueryValue"

const fetchData = async (id: string) => {
  return await db.someData.findFirst({
    where: { id },
    // このページで使いたいデータだけ取り出す。
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
    },
  })
}

type Response = Unpromise<ReturnType<typeof fetchData>>

const handler: BlitzApiHandler<Response> = async (req, res) => {
  const {
    query: { id },
  } = req

  const idParam = parseQueryValue(id)

  if (!idParam) {
    res.statusCode = 400
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ error: "idParam is required" }))

    return
  }

  const data = await fetchData(idParam)

  if (!data) {
    res.statusCode = 404
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ error: `${idParam} is not found.` }))

    return
  }

  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(data))
}

export default handler

export type GetDataResponse = Response