import { prisma } from "db";

await prisma.paste.get({
  where: { id: 1 },
  data: { name: "Rice and Steww" },
});