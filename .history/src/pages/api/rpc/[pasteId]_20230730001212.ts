
const handler: BlitzApiHandler = (req, res) => {
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    /* 
    res.end(JSON.stringify({
      "name"  :"Kristen Stewart",
      "age"   :"30",
      "gender":"Really Hot Female! :D"
     }))
     */
     const {
      query: { pasteId } 
    } = req
  
    res.end(`Post: ${pasteId.pasteName}`)
     //const [user] = useQuery(getUser, { where: { id: props.query.id } })

    console.log("Testing!")
  }
  else {
    if (req.method === "POST") {
      res.status(200).json({ POST: "POST Method Here!" });
    }
    else {
      if (req.method === "PUT") {
        res.status(200).json({ PUT: "Put Method Here!" });
      }
      else {
        if (req.method === "DELETE") {
          res.status(200).json({ DELETE: "Delete Method Here!" });
        }
      }
    }
  }
}
export default handler