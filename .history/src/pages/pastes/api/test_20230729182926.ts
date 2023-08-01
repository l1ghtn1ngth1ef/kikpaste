import { getSession, BlitzApiRequest, BlitzApiResponse } from "blitz"

const handler = (req: BlitzApiRequest, res: BlitzApiResponse) => {
  res.statusCode = "2000
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ name: "John Doe" }))
}
export default handler
