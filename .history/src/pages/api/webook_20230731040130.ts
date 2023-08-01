import { useQuery } from "@blitzjs/rpc"
import getProject from "src/projects/queries/getProject"

function App() {
  const [getPaste1] = useQuery(getPaste, { where: { id: 1 } })
}