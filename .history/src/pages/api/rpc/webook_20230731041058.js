import { Ctx } from "blitz"
import db from "db"
import * as z from "zod"

const GetProject = z.object({
  id: z.number(),
})

export default async function getProject(
  input: z.infer<typeof GetProject>,
  ctx: Ctx
) {
  // Validate the input
  const data = GetProject.parse(input)

  // Require user to be logged in
  ctx.session.$authorize()

  const project = await db.project.findOne({ where: { id: data.id } })

  // Can do any processing, fetching from other APIs, etc

  return project
}
