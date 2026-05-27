import type { IncomingMessage, ServerResponse } from "http";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  if (url === "/product" && method === "GET") {
    const product = [
      {
        id: 1,
        name: "sourav",
      },
    ];
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ message: "this is product  route", data: product }),
    );
  }
};
