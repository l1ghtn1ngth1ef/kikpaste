
const handler: BlitzApiHandler = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ GET: "Get Method Here!" });
    console.log("Testing!")
  }
  else {
    if (req.method === "POST") {
      res.status(200).json({ GET: "POST Method Here!" });
    }
    else {
      if (req.method === "PUT") {
        res.status(200).json({ PUT: "Put Method Here!" });
      }
      else {
        if (req.method === "DELETE") {
        }
      }
    }
  }
}
export default handler