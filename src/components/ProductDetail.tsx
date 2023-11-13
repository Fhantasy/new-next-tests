"use client";

import { useCart } from "@/hooks/useCart";
import { ProductType } from "@/services/products";
import Image from "next/image";
import { Button, Col, Row } from "reactstrap";
import ToastComponent from "./ToastComponent";
import { useState } from "react";

export default function ProductDetail(props: { product: ProductType }) {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { addProduct } = useCart();

  return (
    <>
      <Row>
        <Col lg={6}>
          <div style={{ width: "100%", height: "500px", position: "relative" }}>
            <Image
              src={props.product.imageUrl}
              alt={props.product.name}
              fill
              sizes="default"
              style={{ objectFit: "contain" }}
            />
          </div>
        </Col>
        <Col lg={6}>
          <h1>{props.product.name}</h1>
          <h2 className="text-muted">
            {props.product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h2>
          <p>
            <span className="d-block fw-bold">Descrição:</span>
            {props.product.description}
          </p>
          <p>Em estoque: {props.product.inStock}</p>

          <Button
            className="bg-success"
            onClick={() => {
              addProduct(props.product);
              setToastIsOpen(true);
              setTimeout(() => {
                setToastIsOpen(false);
              }, 3000);
            }}
          >
            Compre Agora
          </Button>
        </Col>
      </Row>
      <ToastComponent
        color="success"
        isOpen={toastIsOpen}
        message="Adicionado no carrinho"
        setIsOpen={setToastIsOpen}
      />
    </>
  );
}
