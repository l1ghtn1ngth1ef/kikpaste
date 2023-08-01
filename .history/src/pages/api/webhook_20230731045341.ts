import styles from "./Food.module.css";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import axios from "axios";
import db from "db";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const food = await db.paste.findUnique({ where: { id: parseInt(id) } });
  return {
    props: {
      food,
    },
  };
}

export default 