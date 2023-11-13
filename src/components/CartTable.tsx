"use client";

import { useCart } from "@/hooks/useCart";
import { ProductType } from "@/services/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "reactstrap";

type CartEntry = {
  product: ProductType;
  quantity: number;
};

const TableRow = (props: { entry: CartEntry }) => {
  const { addProduct, removeProduct } = useCart();

  return (
    <tr>
      <td>
        <Row className="align-items-center">
          <Col lg={2} md={2} xs={4}>
            <div style={{ height: "30px", position: "relative" }}>
              <Image
                src={props.entry.product.imageUrl}
                alt={props.entry.product.name}
                fill
                sizes="default"
                style={{ objectFit: "contain" }}
              />
            </div>
          </Col>
          <Col lg={10} md={10} xs={8}>
            {props.entry.product.name}
          </Col>
        </Row>
      </td>
      <td>
        {props.entry.product.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </td>
      <td>{props.entry.quantity}</td>
      <td>
        {(props.entry.product.price * props.entry.quantity).toLocaleString(
          "pt-br",
          {
            style: "currency",
            currency: "BRL",
          }
        )}
      </td>
      <td>
        <Button
          className="bg-primary"
          size="sm"
          onClick={() => addProduct(props.entry.product)}
        >
          +
        </Button>{" "}
        <Button
          className="bg-danger"
          size="sm"
          onClick={() => removeProduct(props.entry.product.id)}
        >
          -
        </Button>
      </td>
    </tr>
  );
};

export default function CartTable() {
  const [cartEntries, setCartEntries] = useState<CartEntry[]>([]);
  const { cart } = useCart();

  useEffect(() => {
    const entries = cart.reduce((list, product) => {
      const productIndex = list.findIndex(
        (entry) => entry.product.id === product.id
      );

      if (productIndex === -1) {
        return [
          ...list,
          {
            product,
            quantity: 1,
          },
        ];
      }
      list[productIndex].quantity++;
      return list;
    }, [] as CartEntry[]);

    entries.sort((a, b) => a.product.id - b.product.id);
    setCartEntries(entries);
  }, [cart]);

  return (
    <Table responsive className="align-middle" style={{ minWidth: "32rem" }}>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Qtd.</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartEntries.map((cartEntry) => (
          <TableRow key={cartEntry.product.id} entry={cartEntry} />
        ))}
      </tbody>
    </Table>
  );
}
