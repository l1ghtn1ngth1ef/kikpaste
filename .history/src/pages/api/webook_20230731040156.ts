import { useQuery } from "@blitzjs/rpc"
import getProject from "src/pastes/queries"

function App() {
  const [getPaste1] = useQuery(getPaste, { where: { id: 1 } })
}