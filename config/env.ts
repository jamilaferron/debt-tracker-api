import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}` });

export const { PORT, SERVER_URL, NODE_ENV } = process.env;
