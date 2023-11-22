// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        if (
            req.nextUrl.pathname.startsWith("/gdiadmin/addproduct") &&
            !req.nextauth.token
        )
            return NextResponse.rewrite(new URL("/gdiadmin/login", req.url));
        if (req.nextUrl.pathname.startsWith("/gdiadmin") && !req.nextauth.token)
            return NextResponse.rewrite(new URL("/gdiadmin/login", req.url));

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: ["/gdiadmin/addproduct", "/gdiadmin"],
};