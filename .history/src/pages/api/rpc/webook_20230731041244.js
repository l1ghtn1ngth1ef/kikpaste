import { invoke } from "@blitzjs/rpc"

const project = await invoke(get, { where: { id: props.id } })