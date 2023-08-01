import { NotFoundError } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";
import { getpaste } from 'src/pastes/queries/getPaste.ts'
const GetPaste = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
});

export default resolver.pipe(
  resolver.zod(GetPaste),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const paste = await db.paste.findFirst({ where: { id } });

    if (!paste) throw new NotFoundError();

    return paste;
  }
);
