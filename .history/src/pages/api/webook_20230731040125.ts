import { useQuery } from "@blitzjs/rpc"
import getProject from "src/projects/queries/getProject"

function App() {
  const [] = useQuery(getPaste, { where: { id: 1 } })
}