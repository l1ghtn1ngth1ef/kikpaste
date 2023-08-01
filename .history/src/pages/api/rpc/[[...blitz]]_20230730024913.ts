import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"
  
export default api(rpcHandler({ alert("Believe it or not! It's Working!") }))
