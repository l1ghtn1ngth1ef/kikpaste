import db from "db";

const handler: BlitzApiHandler = async (req: BlitzApiRequest,
  res: BlitzApiResponse) => {

  const { query: { pasteId } } = req  // Define pasteId from Url

  res.statusCode = 200; // Return Status Code for WebServer Reply

  res.setHeader("Content-Type", "application/json") // Set headers for Webserver Reply
   
  try { // try the Database Routine 

    const id = 2;
    const data = await db.paste.findUnique({ where: { id: pasteId } });
    res.end(JSON.stringify({data}))
))
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }

}