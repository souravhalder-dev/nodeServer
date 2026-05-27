import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "this is root route" }));
    } else if (url?.startsWith("/product")) {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "this is product  route" }));
    } else {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("route not found");
    }
  },
);

server.listen(5000, () => {
  console.log("server is fly on the port 5000");
});
