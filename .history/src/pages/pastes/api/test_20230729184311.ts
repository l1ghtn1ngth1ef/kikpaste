import { getSession, BlitzApiRequest, BlitzApiResponse } from "blitz"

const handler: BlitzApiHandler = (req, res) => {
  const {
    query: { paste.pastName },
  } = req

  res.end(`Post: ${paste.pasteName}`)
}
export default handler
