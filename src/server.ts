import { createServer, IncomingMessage, Server, ServerResponse } from "http";
<<<<<<< HEAD
import config from "./config";
import { routeHandler } from "./routes/route";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routeHandler(req, res);
  },
);

server.listen(config.port, () => {
  console.log(`The server is running on the port ${config.port}`);
=======
import { routeHandle } from "./routes/server";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routeHandle(req, res);
  },
);

server.listen(5000, () => {
  console.log("server is fly on the port 5000");
>>>>>>> 48cac8948ba48fe726c75491c84b80c9e225c171
});
