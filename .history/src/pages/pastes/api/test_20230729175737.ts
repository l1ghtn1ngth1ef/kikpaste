const handler: BlitzApiHandler = (req, res) => {
  if (req.method === "GET") {
    res.statusCode = 200
    console.log("Consoled!")
  }   

}
export default handler