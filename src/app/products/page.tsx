import ProductsList from "@/components/ProductsList";
import { fetchProducts } from "@/services/products";
import { Metadata } from "next";
import { Container } from "reactstrap";

export const metadata: Metadata = {
  title: "Produtos",
};

export default async function Products() {
  const products = await fetchProducts();

  return (
    <Container className="mb-5">
      <h1 className="my-5">Nossos produtos</h1>
      <ProductsList products={products} />
    </Container>
  );
}
