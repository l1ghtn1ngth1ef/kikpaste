import db from "db";
import { Head, Link, useQuery } from "blitz"
import getPaste from "src/pastes/queries/getPaste";
import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"
import { PrismaClient } from "db";

const handler: BlitzApiHandler = async (req: BlitzApiRequest,
  res: BlitzApiResponse) => {

  const { query: { pasteId } } = req
  
  if (req.method === "GET") {

    res.status(200).json({ pasteId });

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