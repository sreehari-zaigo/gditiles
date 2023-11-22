import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: slug,
      },
      include: {
        product_category: true,
      },
    });
    return new NextResponse(JSON.stringify(product, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const DELETE = async (req, { params }) => {
  const { slug } = params;
  console.log(slug)
  try {
    const deletedProduct = await prisma.product.delete({
      where: {
        id: slug,
      },
    });
    return new NextResponse(JSON.stringify({ message: "Deleted successfully" }, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const PUT = async (req, { params }) => {
  const { slug } = params;
  const { searchParams } = new URL(req.url);
  const toggle = searchParams.get("fn");
  let state = searchParams.get("state");
  console.log(slug, state)
  console.log(typeof state)

  if (typeof state === "string") {
    const lowerCaseValue = state.toLowerCase();
    if (lowerCaseValue === "true") {
      state = true;
    } else if (lowerCaseValue === "false") {
      state = false;
    }
  }
  try {
    if (toggle == "popular") {
      const updatedProduct = await prisma.product.update({
        where: { id: slug },
        data: { Popular_product: !state },
      });
    }

    if (toggle == "status") {
      const updatedProduct = await prisma.product.update({
        where: { id: slug },
        data: { status: !product.status },
      });
    }

    return new NextResponse(JSON.stringify({ message: "updated successfully" }, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};