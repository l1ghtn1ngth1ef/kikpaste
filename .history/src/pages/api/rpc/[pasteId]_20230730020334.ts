
const handler: BlitzApiHandler = async (req, res) => {
  if (req.method === "GET") {

    res.statusCode = 200;

    res.setHeader("Content-Type", "application/json")
    const [getpaste] = useQuery(getRecipes)

    res.end(JSON.stringify({
      "name": "Kristen Stewart",
      "age": "30",
      "gender": "Really Hot Female! :D"
    }));

    console.log("Testing!")

  }
}
export default handler