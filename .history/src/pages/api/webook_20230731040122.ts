import { useQuery } from "@blitzjs/rpc"
import getProject from "src/projects/queries/getProject"

function App() {
  const [paste] = useQuery(getPaste, { where: { id: 1 } })
}