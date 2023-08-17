import { Ctx } from "blitz"

const Editor = dynamic(() => import("src/pastes/components/CKEditor"), {
  ssr: false,
})
export default async function logout(_: any, ctx: Ctx) {
  return await ctx.session.$revoke()
}
