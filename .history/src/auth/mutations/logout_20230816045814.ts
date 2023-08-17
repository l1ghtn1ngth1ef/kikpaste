import { Ctx } from "blitz"
import NoSSR from 'react-no-ssr';
ReactDOM.render(<App />, document.getElementById('root'));
export default async function logout(_: any, ctx: Ctx) {
  return await ctx.session.$revoke()
}
