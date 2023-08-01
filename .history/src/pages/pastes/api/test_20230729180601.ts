import { getSession, BlitzApiRequest, BlitzApiResponse } from "blitz"

export default async function customRoute(
  req: BlitzApiRequest,
  res: BlitzApiResponse
) {
  const session = await getSession(req, res)
  console.log("User ID:", session.userId)

  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ userId: session.userId }))
}