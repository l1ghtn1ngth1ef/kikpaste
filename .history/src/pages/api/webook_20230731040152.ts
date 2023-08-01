import { useQuery } from "@blitzjs/rpc"
import getProject from "src/pastes"

function App() {
  const [getPaste1] = useQuery(getPaste, { where: { id: 1 } })
}