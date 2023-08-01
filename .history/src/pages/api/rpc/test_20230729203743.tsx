import { getSession, BlitzApiRequest, BlitzApiResponse } from "blitz"

const handler: BlitzApiHandler = (req, res) => {
  if (req.method === "GET") {
    res.status(300).json({GET: "Get Method Here!"});
    console.log("Testing!")  } else {
    // Handle any other HTTP method
  }
}
export default handler