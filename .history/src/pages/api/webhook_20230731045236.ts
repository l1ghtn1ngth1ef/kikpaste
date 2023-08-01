import styles from "./Food.module.css";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
