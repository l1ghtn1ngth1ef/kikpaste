import { Head, Link, useQuery } from "blitz"
import getPaste from "src/pastes/queries/getPaste";
import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"
import { PrismaClient } from "db";
import { NotFoundError } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db from "db";
var colors = require('colors');

const prisma = new PrismaClient();

const handler: BlitzApiHandler = async (req: BlitzApiRequest,
  res: BlitzApiResponse) => {
    
    console.log(req.query.webhookId)
  const pasteId = req.query.webhookId;

  switch (req.method) {

    case 'GET':
      res.setHeader("Content-Type", "application/json")
      //res.status(200).json({ Status: '🚀Ok! Get Method Staged!🔥' })
      try {

        const api = await prisma.paste.findUnique({ where: { id: Number(pasteId) } });
        res.end(JSON.stringify({ api }, null, 2))

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

    case 'OPTIONS':
      res.setHeader("Content-Type", "application/json")
      res.status(200).json({ Status: '🚀Ok! OPTIONS Method Staged!🔥' })
      break;

    case 'HEAD':
      res.setHeader("Content-Type", "application/json")
      res.status(200).json({ Status: '🚀Ok! HEAD Method Staged!🔥' })
      break;

    case 'PROPFIND':
      res.setHeader("Content-Type", "application/json")
      res.status(200).json({ Status: '🚀Ok! PROPFIND Method Staged!🔥' })
      break;

    case 'CUSTOM':
      res.setHeader("Content-Type", "application/json")
      res.status(200).json({ Status: '🚀Ok! CUSTOM Method Staged!🔥' })
      break;

    default:
      res.status(405).end(`${req.method} Currently Not Allowed! 🧨💣🔥 `);
      break;
  }
  console.log("Testing" .rainbow)
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