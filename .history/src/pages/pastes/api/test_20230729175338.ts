const handler: BlitzApiHandler = (req, res) => {
  if (req.method === "GET") {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ name: "John Doe" }))  
  console.log("Consoled!")
  }   
    else {
  }
}
export default handler