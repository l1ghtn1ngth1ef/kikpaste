const handler: BlitzApiHandler = (req, res) => {
  if (req.method === "POST") {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ name: "John Doe" }))  } else {
    // Handle any other HTTP method
  }
}
export default handler