import { useQuery } from "@blitzjs/rpc"
import getPaste from "src/pastes/queries/getPaste"

function App1() {
  const [project] = useQuery(getPaste, { where: { id: 1 } })
}

export default App1;