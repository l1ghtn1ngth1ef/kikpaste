import { Head, Link, useQuery } from "blitz"
import getPaste from "src/pastes/queries/getPaste";
import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"
import { PrismaClient } from "db";
import { NotFoundError } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db from "db";

const handler: BlitzApiHandler = async (req: BlitzApiRequest,
  res: BlitzApiResponse) => {

  const { query: { pasteId } } = req
  const { userId } = req.query;

  pasteId = JSON.stringify(pasteId) 

  if (req.method === "GET") {

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")

    try {

      const data = await db.paste.findUnique({ where: { id: JSON.stringify(pasteId) } });
      res.end(JSON.stringify({ data }))

    } catch (err) {
      res.status(500).send({ error: 'Nuked! : failed to fetch data' })
    }
    console.log("Testing!")
  }
}

export default handler;