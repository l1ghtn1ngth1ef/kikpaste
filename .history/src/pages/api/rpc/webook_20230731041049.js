import { useQuery } from "@blitzjs/rpc"
import getProject from "src/pastes/queries/getPaste"

export default function test() {
  const [getPaste1] = useQuery(getPaste, { where: { id: 2 } })
}

