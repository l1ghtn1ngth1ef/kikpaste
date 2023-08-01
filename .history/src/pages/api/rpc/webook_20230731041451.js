import { invoke } from "@blitzjs/rpc"
import db from "db"
import getPaste from "src/pastes/queries/getPaste"

export default resolver.pipe(resolver.authorize(), async (userId: string) => {
  const { db } = await mongodbConnect()

  try {
    const blogs = await db.collection("blog").find({ _id: userId }).toArray()
    return blogs
  } catch (error) {
    console.log("Error retrieving blogs: ", error)
  }
})