<<<<<<< HEAD
import fs from "fs";
import path from "path";

=======
import path from "path";
import fs from "fs";
import { json } from "stream/consumers";
>>>>>>> 48cac8948ba48fe726c75491c84b80c9e225c171
const filePath = path.join(process.cwd(), "./src/database/db.json");

export const readProduct = () => {
  //   console.log(process.cwd());
  //   console.log(filePath);
<<<<<<< HEAD
  const products = fs.readFileSync(filePath, "utf-8");
  //   console.log(products.toString());
  //   console.log(products);
  //   console.log(JSON.parse(products));
  return JSON.parse(products);
};

export const insertProduct = (payload: any) => {
  console.log(JSON.stringify(payload));
  fs.writeFileSync(filePath, JSON.stringify(payload));
=======
  const product = fs.readFileSync(filePath, "utf-8");
  console.log(product);
  return JSON.parse(product);
};

export const insertProduct = (palyLoad: any) => {
  console.log(filePath, JSON.stringify(palyLoad));
  fs.writeFileSync(filePath, JSON.stringify(palyLoad));
>>>>>>> 48cac8948ba48fe726c75491c84b80c9e225c171
};
