import { getSession, BlitzApiRequest, BlitzApiResponse } from "blitz"

const handler: BlitzApiHandler = (req, res) => {
  res.statusCode = 300
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ name: "John Doe" }))
}
export default handler