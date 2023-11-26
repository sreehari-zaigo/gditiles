// import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        console.log("GetProducts..........")
        const { searchParams } = new URL(req.url);
        const page = searchParams.get("page");
        const filterBy = searchParams.get("filterBy");
        const popular_products = searchParams.get("popular_products");
        if (popular_products) {
            const popularProducts = await prisma.product.findMany({
                where: {
                    Popular_product: true,
                    status: true,
                },
                include: {
                    product_category: true,
                },
            });

            console.log(popularProducts)
            return new NextResponse(
                JSON.stringify({
                    popularProducts,
                }, { status: 200 })
            );
        }
        let pageSize = 3;
        const skip = (page - 1) * pageSize;
        let productsQuery = {
            skip,
            take: pageSize,
            include: { product_category: true },
        };
        if (!filterBy == "All") {
            productsQuery.where = {
                product_category: {
                    category_name: filterBy,
                },
                status: true,
            };
        } else {
            productsQuery.where = {
                status: true,
            };
        }

        const products = await prisma.product.findMany(productsQuery);

        console.log(products)
        const totalProducts = await prisma.product.count();

        return new NextResponse(
            JSON.stringify({
                products,
                totalProducts,
            }, { status: 200 })
        );
    } catch (err) {
        console.log(err)
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};


export const POST = async (req) => {
    // const session = await getAuthSession();

    // if (!session) {
    //   return new NextResponse(
    //     JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    //   );
    // }

    try {
        const formData = await req.json();
        console.log(formData, "catego")
        const newProduct = await prisma.product.create({
            data: formData,
        });
        return new NextResponse(JSON.stringify(newProduct, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};