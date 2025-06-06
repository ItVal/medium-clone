import { DataSourceOptions } from "typeorm";

const dbConfig: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "medium",
  password: "123",
  database: "mediumclone",
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Set to false in production
};

export default dbConfig;
