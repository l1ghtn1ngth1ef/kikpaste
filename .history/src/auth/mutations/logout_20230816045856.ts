import { Ctx } from "blitz"
import NoSSR from 'react-no-ssr';

function unMountEdit
ReactDOM.render(<Editor />, document.getElementById('Home'));

export default async function logout(_: any, ctx: Ctx) {
  return await ctx.session.$revoke()
}
