import db from "db";
import { Head, Link, useQuery } from "blitz"
import getPaste from "src/pastes/queries/getPaste";
import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"

const handler: BlitzApiHandler = async (req: BlitzApiRequest,
  res: BlitzApiResponse) => {

  const { query: { pasteId } } = req  // Define pasteId from Url
  res.statusCode = 200; // Return Status Code for WebServer Reply

  res.setHeader("Content-Type", "application/json") // Set headers for Webserver Reply

  try { // try the Database Routine 

    const data = await db.paste.findUnique({ where: { id: pasteId } }); // if I change this to 2 I get paste 2 in browser so thats good, but it should work like webhook/3 and get paste 3 because [webhook].ts is in brackets, right?

    res.body(JSON.stringify(pasteId))

    res.end(JSON.stringify({data}))

  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}

export default handler;