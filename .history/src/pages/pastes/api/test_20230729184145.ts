import { getSession, BlitzApiRequest, BlitzApiResponse } from "blitz"

const handler = (req: BlitzApiRequest, res: BlitzApiResponse) => {

  res.end(JSON.stringify({ name: "John Doe" }))
}
export default handler
