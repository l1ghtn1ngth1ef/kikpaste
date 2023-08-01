import { invoke } from "@blitzjs/rpc"
import getPaste from "src/pastes/queries/getPaste"

const project = await invoke(getPaste, { where: { id: db.id } })