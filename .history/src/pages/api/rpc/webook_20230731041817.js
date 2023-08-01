import { invoke } from "@blitzjs/rpc"
import db from "db"
import getPaste

import {useQuery} from "blitz"

export default function test1() { 
   const [paste] = useQuery(getPaste, {where: {id: 2}})
  
  }
