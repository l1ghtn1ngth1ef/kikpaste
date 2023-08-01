import { Head, Link, useQuery } from "blitz"
import getPaste from "src/pastes/queries/getPaste";
import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"

const handler: BlitzApiHandler = async (req, res) => {

  if (req.method === "GET") {

    res.statusCode = 200;


    res.end(JSON.stringify({
      "name": "Kristen Stewart",
      "age": "30",
      "gender": "Really Hot Female! :D"
    }));

    //console.log("Testing!")

  }
}
export default handler