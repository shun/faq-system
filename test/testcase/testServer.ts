import { createTestClient, ApolloServerTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server';
import { Schema } from '/backend/graphql/schema';
import { Resolvers } from '/backend/resolvers/resolvers';

export default function testServer(
  dataSources: any
): ApolloServerTestClient {
  return createTestClient(
    new ApolloServer({ typeDefs, resolvers, dataSources })
  )
}

