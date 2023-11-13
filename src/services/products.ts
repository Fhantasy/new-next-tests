export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
};

export async function fetchProducts() {
  const products: ProductType[] = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/products`, {
    mode: "no-cors",
  }).then((res) => res.json());

  return products;
}

export async function fetchProduct(productId: string) {
  const product: ProductType = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/products/${productId}`,
    {
      mode: "no-cors",
    }
  ).then((res) => res.json());

  return product;
}
