import { Ctx } from "blitz"
import NoSSR from 'react-no-ssr';
import React from 'react';
import ReactDOM from 'react-dom';


export default async function logout(_: any, ctx: Ctx) {
  return await ctx.session.$revoke()
}
