import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { routeHandle } from "./routes/server";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routeHandle(req, res);
  },
);

server.listen(5000, () => {
  console.log("server is fly on the port 5000");
});
