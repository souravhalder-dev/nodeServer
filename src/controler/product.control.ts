import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";
import type { Iproduct } from "../type/iProducttype";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  //   product
  const urlParts = url?.split("/");
  //   console.log(urlParts);
  const id = urlParts && urlParts[1] === "product" ? Number(urlParts[2]) : null;
  console.log(id);
  //   all product get
  if (url === "/product" && method === "GET") {
    // const product = [
    //   {
    //     id: 1,
    //     name: "sourav",
    //   },
    // ];
    const product = readProduct();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ message: "this is product  route", data: product }),
    );
  } else if (method === "GET" && id !== null) {
    const product = readProduct();
    const oneProduct = product.find((p: Iproduct) => p.id === id);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "this is oneproduct  route",
        data: oneProduct,
      }),
    );
  }
};
