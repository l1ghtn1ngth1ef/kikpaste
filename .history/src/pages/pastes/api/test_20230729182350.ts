
const handler = (req: BlitzApiRequest, res: BlitzApiResponse) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ name: "John Doe" }))
}
export default handlerimport { getSession, BlitzApiRequest, BlitzApiResponse } from "blitz"