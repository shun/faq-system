import {ConnectionOptions} from "typeorm";

export const DBConfig: ConnectionOptions = {
  type: "mysql",
  host: "db",
  port: 3306,
  username: "faq",
  password: "faq",
  database: "faq_prod",
  synchronize: true,
  entities: ["src/entity/**/*.ts"]
};
