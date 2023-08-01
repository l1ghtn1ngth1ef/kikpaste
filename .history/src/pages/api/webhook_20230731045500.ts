import { useQuery } from "@blitzjs/rpc"
import getProject from "src/projects/queries/getProject"

function App() {
  const [project] = useQuery(getProject, { where: { id: 1 } })
}

export default App1