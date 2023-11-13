"use client";

import { useCart } from "@/hooks/useCart";
import { Card, CardBody } from "reactstrap";

export default function CartTotal() {
  const { cart } = useCart();

  return (
    <Card className="ms-auto" style={{ maxWidth: "20rem" }}>
      <CardBody className="d-flex justify-content-between">
        <strong>TOTAL: </strong>
        <span>
          {cart
            .reduce((total, product) => total + product.price, 0)
            .toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
        </span>
      </CardBody>
    </Card>
  );
}
