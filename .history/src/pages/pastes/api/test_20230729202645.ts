import { getSession, BlitzApiRequest, BlitzApiResponse } from "blitz"
const handler: BlitzApiHandler = (req, res) => {
  if (req.method === "GET") {
    res.status()
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
export default handler