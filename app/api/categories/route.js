// import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {

    try {
        const category = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(category, { status: 200 }));
    } catch (err) {
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
        const body = await req.json();
        const newCategory = await prisma.category.create({
            data: {
                category_name: body.value,
            },
        });
        return new NextResponse(JSON.stringify(newCategory, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};
