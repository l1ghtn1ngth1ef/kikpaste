import db from "db";
import { Head, Link, useQuery } from "blitz"
import getPaste from "src/pastes/queries/getPaste";
import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/blitz-server"
import { PrismaClient } from "db";

const handler: BlitzApiHandler = async (req: BlitzApiRequest,
  res: BlitzApiResponse) => {

  const { query: { pasteId } } = req
  
  res.status(200).json({ pasteId });
  


  console.log( ` ${pasteId} `)

}

export default handler;