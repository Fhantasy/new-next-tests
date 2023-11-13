"use client";

import { useCart } from "@/hooks/useCart";
import { ProductType } from "@/services/products";
import Image from "next/image";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import ToastComponent from "./ToastComponent";
import { useState } from "react";
import Link from "next/link";

type ProductCardProps = {
  product: ProductType;
};

const ProductsCard: React.FC<ProductCardProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { addProduct } = useCart();

  return (
    <>
      <Card>
        <div style={{ height: "200px", position: "relative" }}>
          <Link href={`products/${product.id}`}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="default"
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>

        <CardBody>
          <Link href={`products/${product.id}`}>
            <CardTitle tag="h4">{product.name}</CardTitle>
          </Link>
          <CardSubtitle className="text-muted">
            {product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </CardSubtitle>
          <Button
            block
            color="success"
            onClick={() => {
              addProduct(product);
              setToastIsOpen(true);
              setTimeout(() => {
                setToastIsOpen(false);
              }, 3000);
            }}
          >
            Adicionar ao carrinho
          </Button>
        </CardBody>
      </Card>
      <ToastComponent
        color="success"
        message="Produto adicionado ao carrinho"
        isOpen={toastIsOpen}
        setIsOpen={setToastIsOpen}
      />
    </>
  );
};

export default ProductsCard;
