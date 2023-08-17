import { Ctx } from "blitz"
import dynamic from "next/dynamic"

const Editor = dynamic(() => import("src/pastes/components/CKEditor"), {
  ssr: false,
})

export default async function logout(_: any, ctx: Ctx) {
  return await ctx.session.$revoke()
}
