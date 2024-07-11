import { Product, ProductAttributes } from "../models/productModel";

export async function fetchAllProducts(): Promise<ProductAttributes[]> {
  const products = await Product.findAll();
  return products.map(product => product.get({ plain: true }));
}