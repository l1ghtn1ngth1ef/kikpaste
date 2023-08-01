const handler: BlitzApiHandler = (req, res) => {
  if (req.method === "POST") {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ name: "John Doe" }))  } else {
  }
  if (req.method === "POST") {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ name: "John Doe" }))  } else {
  }
}
export default handler