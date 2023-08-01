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

    const pasteId = req.query.webhookId;
  console.log(req.query)

  switch (req.method) {

    case 'GET':
      res.setHeader("Content-Type", "application/json")
      res.status(200).json({ Status: '🚀Ok! Get Method Staged!🔥' })
      try {
        const data = await prisma.paste.findUnique({ where: { id: Number(pasteId) } });
        res.end(JSON.stringify({ data }))
      } catch (err) {
        res.status(500).send({ error: 'Nuked! : failed to fetch data' })
      }
      break;
    case 'POST':
      res.setHeader("Content-Type", "application/json")
      res.status(201).json({ Status: '🚀Ok! Post Method Staged!🔥' })
      break;

    case 'PATCH':
      res.setHeader("Content-Type", "application/json")
      res.status(200).json({ Status: '🚀Ok! PATCH Method Staged!🔥' })
      break;

    case 'PUT':
      res.setHeader("Content-Type", "application/json")
      res.status(200).json({ Status: '🚀Ok! PUT Method Staged!🔥' })
      break;

    case 'DELETE':
      res.setHeader("Content-Type", "application/json")
      res.status(200).json({ Status: '🚀Ok! DELETE Method Staged!🔥' })
      break;

    default:
      res.status(405).end(`${req.method} Not Allowed`);
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