import { Head, Link, useQuery } from "blitz"
import getPaste from "src/pastes/queries/getPaste";
import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"

const handler: BlitzApiHandler = (req, res) => {

  if (req.method === "GET") {

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({
      "Method" : "GET",
      "name": "Kristen Stewart",
      "age": "30",
      "gender": "Really Hot Female! :D"
    }))
  }
    else {
      if (req.method === "POST") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({
          "Method" : "POST",
          "name": "Kristen Stewart",
          "age": "30",
          "gender": "Really Hot Female! :D"
        }));
    }
    else {
      if (req.method === "PUT") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({
          "Method" : "PUT",
          "name": "Kristen Stewart",
          "age": "30",
          "gender": "Really Hot Female! :D"
        }));
    }
  }
    console.log("Testing!")

  }
}
export default handler