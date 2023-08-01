import { prisma } from "db";

await prisma.food.update({
  where: { id: 1 },
  data: { name: "Rice and Steww" },
});