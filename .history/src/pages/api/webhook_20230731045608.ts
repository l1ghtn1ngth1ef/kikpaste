import { useQuery } from "@blitzjs/rpc"
import getPaste from "src/pastes/queries/getPaste"

function App1() {
  const [paste] = useQuery(getPaste, { where: { id: 1 } })
}

export default App1;