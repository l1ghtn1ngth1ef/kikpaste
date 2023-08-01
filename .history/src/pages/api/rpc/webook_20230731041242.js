import { invoke } from "@blitzjs/rpc"

const project = await invoke(getProject, { where: { id: props.id } })