import db from "db";

export default async function handler(req, res) {

  const { query: { pasteId } } = req  // define pasteId from Url

  res.statusCode = 200; // Return Status Code for WebServer Reply

  res.setHeader("Content-Type", "application/json") // Set headers for Webserver Reply
   
  try { // try the Database Routine 
    
    const id = 2;
    const data = await db.paste.findUnique({ where: { id: 2 } });
    res.end(JSON.stringify({data}))

  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }

}