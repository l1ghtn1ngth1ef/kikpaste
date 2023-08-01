import { getSession, BlitzApiRequest, BlitzApiResponse } from "blitz"

const handler: BlitzApiHandler = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({GET: "Get Method Here!"});
    console.log("Testing!")  } el
}
export default handler