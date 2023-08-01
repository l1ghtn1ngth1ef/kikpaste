import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"
  
if (req.method === "GET") {

    res.statusCode = 200;

    res.setHeader("Content-Type", "application/json")

    res.end(JSON.stringify({
      "name": "Kristen Stewart",
      "age": "30",
      "gender": "Really Hot Female! :D"
    }));

    console.log("Testing!")

  }
}
export default api(rpcHandler({ onError: console.log }))
