import getPaste from "src/pastes/queries/getPaste";
import { Head, Link, useQuery } from "blitz"

const handler: BlitzApiHandler = async (req, res) => {
  if (req.method === "GET") {

    res.statusCode = 200;

    res.setHeader("Content-Type", "application/json")
    const [getpaste] = useQuery(getPaste)

   

    console.log("Testing!")

  }
}
export default handler