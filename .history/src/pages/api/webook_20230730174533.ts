
import { PrismaClient } from "@prisma/client";


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getStaticProps() {
  // Get all foods in the "food" db
  const allfoods = await prisma.food.findMany();

  return {
    props: allFoods,
  };
}