import { useQuery } from "@blitzjs/rpc"
import getProject from "src/projects/queries/getProject"

function App() {
  const [getPaste] = useQuery(getPaste, { where: { id: 1 } })
}