import ProductDetail from "@/components/ProductDetail";
import { fetchProduct, fetchProducts } from "@/services/products";
import { GetStaticPaths, Metadata, NextPage, ResolvingMetadata } from "next";
import { ReactNode } from "react";
import { Container } from "reactstrap";

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts();

  const paths = products.map((product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function generateMetadata(props: {
  params: { id: string };
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  const id = props.params.id;

  const product = await fetchProduct(id);

  return {
    title: product.name,
  };
}

export default async function Product(props: {
  params?: {
    id: string;
  };
  children?: ReactNode;
}) {
  const product = await fetchProduct(props.params!.id);

  return (
    <Container className="mt-5">
      <ProductDetail product={product} />
    </Container>
  );
}
