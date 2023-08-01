import { getSession, BlitzApiRequest, BlitzApiResponse } from "blitz"

const handler: BlitzApiHandler = (req, res) => {
  const {
    query: { paste. },
  } = req

  res.end(`Post: ${pid}`)
}
export default handler
