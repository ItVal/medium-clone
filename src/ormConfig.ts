import { DataSource, DataSourceOptions } from "typeorm";

export const dbConfig: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "medium",
  password: "123",
  database: "mediumclone",
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false, // Set to false in production
  migrations: [__dirname + '/src/migrations/**/*{.ts,.js}'],
};

const dataSource = new DataSource(dbConfig);
export default dataSource;
