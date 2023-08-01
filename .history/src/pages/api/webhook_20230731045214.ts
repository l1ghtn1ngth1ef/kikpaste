import styles from "./Food.module.css";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import EditFood from "../../components/editfood";
import axios from "axios";
import { useRouter } from "next/router";