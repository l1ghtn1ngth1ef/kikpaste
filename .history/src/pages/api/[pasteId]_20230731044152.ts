import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"

import { useQuery } from "@blitzjs/rpc"
import getProject from "src/projects/queries/getProject"

export function App() {
  const [project] = useQuery(getProject, { where: { id: 1 } })
}