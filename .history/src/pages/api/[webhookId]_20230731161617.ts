import { Head, Link, useQuery } from "blitz"
import getPaste from "src/pastes/queries/getPaste";
import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"
import { PrismaClient } from "db";
import { NotFoundError } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db from "db";

const prisma = new PrismaClient();

const handler: BlitzApiHandler = async (req: BlitzApiRequest,
  res: BlitzApiResponse) => {

    switch (req.method) {
      case 'GET':
        res.setHeader("Content-Type", "application/json")
        res.status(200).json({ Status: '🚀Ok! Get Method Staged!🔥' })
        break;
      case 'POST':
        res.setHeader("Content-Type", "application/json")
        res.status(200).json({ Status: '🚀Ok! Get Method Staged!🔥' })
        break;

      case 'PATCH':
        //some code...
     //   res.status(200).json({response object})
        break;

      default:
   //     res.status(405).end(`${method} Not Allowed`);
        break;
    }
/*
  const pasteId = req.query.webhookId;
 
  if (req.method === "GET") {

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")

    try {

      const data = await prisma.paste.findUnique({ where: { id: Number(pasteId) } });
      res.end(JSON.stringify({ data }))

    } catch (err) {
      res.status(500).send({ error: 'Nuked! : failed to fetch data' })
    }

    console.log("Testing!")
  } */
}

export default handler;