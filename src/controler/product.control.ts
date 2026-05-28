import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProduct } from "../service/product.service";
import type { Iproduct } from "../type/iProducttype";
import { porseBody } from "../uitilty/parseBody";

export const productController = async (
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
  } else if (method === "POST" && url === "/product") {
    // data post to database
    const body = await porseBody(req);
    const product = readProduct();
    const newProduct = {
      id: Date.now(),
      ...body,
    };
    // const newProduct = {
    //   id: Date.now(),
    //   ...body[0],
    // };
    product.push(newProduct);
    insertProduct(product);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "create is done ",
        //   data: oneProduct,
      }),
    );
  } else if (method === "PUT" && id !== null) {
    const body = await porseBody(req);

    const product = readProduct();

    const index = product.findIndex((p: Iproduct) => p.id === id);

    // product না পেলে
    if (index < 0) {
      res.writeHead(404, {
        "content-type": "application/json",
      });

      return res.end(
        JSON.stringify({
          message: "product not found",
          data: null,
        }),
      );
    }

    // product পেলে update হবে
    product[index] = {
      id: product[index].id,
      ...body,
    };

    console.log(product[index]);

    insertProduct(product);

    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: "modify is done",
        data: product[index],
      }),
    );
  }
};
