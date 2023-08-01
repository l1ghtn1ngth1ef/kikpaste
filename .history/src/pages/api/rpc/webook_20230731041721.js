import { invoke } from "@blitzjs/rpc"
import db from "db"
import getPaste from "src/pastes/queries/getPaste"

import {useQuery} from "blitz"
import getProject from "app/projects/queries/getProject"

function App() { 
   const [paste] = useQuery(getPaste, {where: {id: 2}})
  
  }
