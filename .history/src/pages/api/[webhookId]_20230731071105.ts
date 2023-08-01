import db from "db";
import { Head, Link, useQuery } from "blitz"
import getPaste from "src/pastes/queries/getPaste";
import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"
import { PrismaClient } from "db";

const handler: BlitzApiHandler = async (req: BlitzApiRequest,
  res: BlitzApiResponse) => {

  const { query: { pasteId } } = req
  const { query } = req;
  const queryParams = query.paramName;
  
  res.status(200).json({ queryParams });
  if (req.method === "GET") {

    res.statusCode = 200; 
    res.setHeader("Content-Type", "application/json") 

    try {

      const data = await db.paste.findUnique({ where: { id: `${pasteId}` }});
      res.end(JSON.stringify({ data }))

    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }

  console.log( ` ${pasteId} `)

}

export default handler;