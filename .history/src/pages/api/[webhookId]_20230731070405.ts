import db from "db";
import { Head, Link, useQuery } from "blitz"
import getPaste from "src/pastes/queries/getPaste";
import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"
import { PrismaClient } from "db";

const handler: BlitzApiHandler = async (req: BlitzApiRequest,
  res: BlitzApiResponse) => {

  const { query: { test1 } } = req
  

  if (req.method === "GET") {

    res.statusCode = 200; 
    res.setHeader("Content-Type", "application/json") 

    try {

      const data = await db.paste.findUnique({ where: { id: Number(test1) }});
      res.end(JSON.stringify({ data }))

    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }

  console.log( ` ${test1} `)

}

export default handler;