import { DataSourceOptions } from "typeorm";

const dbConfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USERNAME || "medium",
  password: process.env.DB_PASSWORD || "123",
  database: process.env.DB_NAME || "mediumclone",
};

export default dbConfig;
