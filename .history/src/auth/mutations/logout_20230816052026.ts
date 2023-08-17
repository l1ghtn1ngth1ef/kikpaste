import { Ctx } from "blitz"
import NoSSR from 'react-no-ssr';
import React from 'react';
import ReactDOM from 'react-dom';

function unMountEditor () {
  if (typeof window !== 'undefined') {

    ReactDOM.render(''<Editor />', document.getElementById("root"));
  const mountedElement = document.getElementById('Home');
  ReactDOM.unmountComponentAtNode(mountedElement);
  }
}

export default async function logout(_: any, ctx: Ctx) {
  unMountEditor();
  return await ctx.session.$revoke()
}
