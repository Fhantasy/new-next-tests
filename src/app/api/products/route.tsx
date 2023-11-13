import { NextResponse } from "next/server";
import products from "../../../../database.json";

export async function GET() {
  return NextResponse.json(products);
}
