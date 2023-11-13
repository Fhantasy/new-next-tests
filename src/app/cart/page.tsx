import CartTable from "@/components/CartTable";
import CartTotal from "@/components/CartTotal";
import { Metadata } from "next";
import { Container } from "reactstrap";

export const metadata: Metadata = {
  title: "Carrinho",
};

export default function Cart() {
  return (
    <Container className="mt-5">
      <h1 className="mt-5">Carrinho</h1>
      <CartTable />
      <CartTotal />
    </Container>
  );
}
