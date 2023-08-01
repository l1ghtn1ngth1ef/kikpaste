import { useQuery } from "@blitzjs/rpc"
import getProject from "src/projects/queries/getPaste"

function App1() {
  const [project] = useQuery(getProject, { where: { id: 1 } })
}

export default App1;