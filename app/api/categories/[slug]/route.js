import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
    const { slug } = params;
    try {
        await prisma.product.deleteMany({
            where: {
                product_category_id: slug,
            },
        });

        await prisma.category.delete({
            where: {
                id: slug,
            },
        });

        return new NextResponse(
            JSON.stringify({ message: "Category and related products deleted successfully" }, { status: 200 })
        );
    } catch (err) {
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};
