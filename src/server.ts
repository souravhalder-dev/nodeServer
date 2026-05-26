import { createServer, IncomingMessage, Server } from "http";

const server :Server = createServer((req:IncomingMessage, res) => {
  console.log(req);
});
