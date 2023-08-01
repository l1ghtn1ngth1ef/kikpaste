import { api } from "interface/blitz-server"
import { Prisma } from "db";
import db from "db";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

const handler: BlitzApiHandler = async (req, res) => {
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    /* 
    res.end(JSON.stringify({
      "name"  :"Kristen Stewart",
      "age"   :"30",
      "gender":"Really Hot Female! :D"
     }))
     */

     const pasteName = await prisma.prismaPaste.findUnique({
       where: {
         id: args.id,
         // add userId to ensure user owns pckd in the future
         // Using AND operator gives error on optional field
         // Todo: fix this
       },
     });

    console.log("Testing!")
  }
  else {
    if (req.method === "POST") {
      res.status(200).json({ POST: "POST Method Here!" });
    }
    else {
      if (req.method === "PUT") {
        res.status(200).json({ PUT: "Put Method Here!" });
      }
      else {
        if (req.method === "DELETE") {
          res.status(200).json({ DELETE: "Delete Method Here!" });
        }
      }
    }
  }
}
export default handler