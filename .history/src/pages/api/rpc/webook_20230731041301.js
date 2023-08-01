import { invoke } from "@blitzjs/rpc"
import db from "db"
import getPaste from "src/pastes/queries/getPaste"

const project = await invoke(getPaste, { where: { id: db.paste.id } })