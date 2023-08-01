import { prisma } from "db";

await prisma.food.get({
  where: { id: 1 },
  data: { name: "Rice and Steww" },
});