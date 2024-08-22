import { NextResponse } from "next/server";
import { getProduct } from "@/server/controller/productController";

export async function GET(request) {
  const url = new URL(request.url);
  const action =
    url.searchParams.get("controllerName") || (await request.json()).action;

  switch (action) {
    case "getProduct":
      return await getProduct();
    case "getStudentCertificate":
      return await getStudentCertificate(request);
    case "verifyCertificate":
      return await verifyCertificate(request);

    default:
      return NextResponse.json({ message: "Invalid action" }, { status: 400 });
  }
}
