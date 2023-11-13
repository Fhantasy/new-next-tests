import { NextRequest, NextResponse } from "next/server";
import products from "../../../../../database.json";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const product = products.find((product) => product.id === Number(id));

  return NextResponse.json(product);
}
