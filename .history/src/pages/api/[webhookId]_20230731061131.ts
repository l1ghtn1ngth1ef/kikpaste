import db from "db";
import { Head, Link, useQuery } from "blitz"
import getPaste from "src/pastes/queries/getPaste";
import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"
import { PrismaClient } from "db";

const handler: BlitzApiHandler = async (req: BlitzApiRequest,
  res: BlitzApiResponse) => {

   // Define pasteId from Url
  res.statusCode = 200; // Return Status Code for WebServer Reply

  res.setHeader("Content-Type", "application/json") // Set headers for Webserver Reply

 // try the Database Routine 
    const { query: { pasteId } } = req 
    const data = await db.paste.findUnique({ where: { id: pasteId } }); 

    res.body(JSON.stringify(pasteId))
    res.end(JSON.stringify({data}))


}

export default handler;