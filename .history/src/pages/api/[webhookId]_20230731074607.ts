import db from "db";
import { Head, Link, useQuery } from "blitz"
import getPaste from "src/pastes/queries/getPaste";
import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"
import { PrismaClient } from "db";

const handler: BlitzApiHandler = async (req: BlitzApiRequest,
  res: BlitzApiResponse) => {


  if (req.method === "GET") {
    const { query: { pasteId } } = req

    res.statusCode = 200; 
    res.setHeader("Content-Type", "application/json") 

    try {

      const data = await db.paste.findUnique({ where: { id: pasteId } });
      res.end(JSON.stringify({ data }))

    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
    console.log(req.query)
  }
}

export default handler;