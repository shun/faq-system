import "reflect-metadata";
import { createConnection} from "typeorm";
import { ApolloServer, gql } from 'apollo-server-express';
import { DBConfig } from './database/db.config';
import { buildSchema } from 'type-graphql';

async function bootstrap() {
  createConnection(DBConfig).then(async connection => {

    const express = require('express');
    const cors = require('cors');
    const app = express();
    app.use(cors());

    const schema = await buildSchema({
                            resolvers: [__dirname + '/resolvers/**/*.ts']
                          });

    const server = new ApolloServer({
                          schema,
                          playground: true
                        });

    server.applyMiddleware({app});
    app.listen({port: 4000}, () => {
      console.log(`server on http://localhost:4000/${server.graphqlPath}`);
    });

  }).catch(error => console.log(error));
}

bootstrap();
