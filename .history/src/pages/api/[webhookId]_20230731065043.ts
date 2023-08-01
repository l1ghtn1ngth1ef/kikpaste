import db from "db";
import { Head, Link, useQuery } from "blitz"
import getPaste from "src/pastes/queries/getPaste";
import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"
import { PrismaClient } from "db";

const handler: BlitzApiHandler = async (req: BlitzApiRequest,
  res: BlitzApiResponse) => {

  //const { query: { pasteId } } = req
  const query = req.query;
  const { pasteId } = query;

  if (req.method === "GET") {

    res.statusCode = 200; 
    res.setHeader("Content-Type", "application/json") 

    try {

      const data = await db.paste.findUnique({ where: { id: Number(query) } });
      res.end(JSON.stringify({ data }))

    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }

  console.log( {query} )

}

export default handler;