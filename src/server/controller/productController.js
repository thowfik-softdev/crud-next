import dbConnect from "@/server/config/dbConnect";
import productModel from "@/server/models/productModels";
import { NextResponse } from "next/server";

// Get api
export async function getProduct() {
  try {
    await dbConnect();
    const users = await productModel.find({});
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching users" },
      { status: 500 }
    );
  }
}

// Post Api
export async function createProduct(req) {
  try {
    await dbConnect();
    const { name, description, price, brand } = await req.json();
    const product = { name, description, price, brand };
    // Creating a new product using the destructured fields
    const newProduct = await userModels.create(product);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating product" },
      { status: 500 }
    );
  }
}

// Put Api
export async function putProduct(req) {
  try {
    await dbConnect();
    const { id, name, description, price, brand } = await req.json();
    const updatedData = { name, description, price, brand };
    // Updating the product using the destructured fields
    const updatedProduct = await userModels.findByIdAndUpdate(id, updatedData, {
      new: true
    });

    if (!updatedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating product" },
      { status: 500 }
    );
  }
}

// Delete Api
export async function removeProduct(req) {
  try {
    await dbConnect();
    const { id } = await req.json();
    const deletedProduct = await userModels.findByIdAndDelete(id);
    if (!deletedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting product" },
      { status: 500 }
    );
  }
}
