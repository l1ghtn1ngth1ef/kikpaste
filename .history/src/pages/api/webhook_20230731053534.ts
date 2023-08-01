import db from "db";
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {

  const prisma = new PrismaClient();

  const { name, message } = req.body

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json")

  try {
    const id = 2;
    const food = await db.paste.findUnique({ where: { id: '2'} });
    res.end(JSON.stringify({food}))
   req.body({})
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}