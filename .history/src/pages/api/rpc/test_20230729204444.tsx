import { getSession, BlitzApiRequest, BlitzApiResponse } from "blitz"

const handler: BlitzApiHandler = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({GET: "Get Method Here!"});
    console.log("Testing!")  }
    else {
      if (req.method === "POST") {

      }
      else {
        if (req.method === "PUT") {

      }
      else {
        if (req.method === "DELETE") {
        }
      }
      }
    }
}
export default handler