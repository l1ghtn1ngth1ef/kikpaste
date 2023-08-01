import { useQuery } from "@blitzjs/rpc"
import getProject from "src/pastes/queries/getPaste"

function App() {
  const [getPaste1] = useQuery(getPaste, { where: { id: 1 } })
}

export default App;