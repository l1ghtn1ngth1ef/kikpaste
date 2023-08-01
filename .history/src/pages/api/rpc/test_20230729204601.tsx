
const handler: BlitzApiHandler = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ GET: "Get Method Here!" });
    console.log("Testing!")
  }
  else {
    if (req.method === "POST") {

    }
    else {
      if (req.method === "PUT") {
      console.log("Put Method Allowed!")
      }
      else {
        if (req.method === "DELETE") {
        }
      }
    }
  }
}
export default handler