import express from "express";
import http from 'http';
import { Server } from 'socket.io';
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./data/resolvers.graphql";
import { typeDefs } from "./data/schema.graphql";
import { PORT } from "./config/config";
import { socket } from "./socket";
const apolloServer = new ApolloServer({ typeDefs, resolvers });

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

socket(io);
apolloServer.applyMiddleware({ app });


app.get("/", (req, res) => {
  console.log("Apollo GraphQL Express apolloServer is ready");
});

server.listen({ port: PORT }, () => {
  console.log(
    `Server is running at http://localhost:${PORT}${apolloServer.graphqlPath}`
  );
});