import { getSession, BlitzApiRequest, BlitzApiResponse } from "blitz"

const handler: BlitzApiHandler = (req, res) => {
  const {
    query: { pid },
  } = req

  res.end(`Post: ${pid}`)
}
export default handler
