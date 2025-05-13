import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// create a SQL connection using our env variables
export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);

// postgresql://neondb_owner:npg_NW8olSOGfx5E@ep-dawn-meadow-a83i0d05-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
