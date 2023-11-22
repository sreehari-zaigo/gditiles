import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { compare } from "bcrypt";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email_id: {
                    label: "email",
                    type: "text",
                },
                password: {
                    label: "password",
                    type: "password",
                },
            },
            async authorize(credentials, req) {
                console.log("...>>")
                const { email_id, password } = credentials;
                if (!email_id || !password) {
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: email_id
                    }
                })

                if (!user) {
                    return null
                }

                const isPasswordValid = await compare(
                    password,
                    user.password
                )

                if (!isPasswordValid) {
                    return null
                }

                return {
                    id: user.id + '',
                    email: user.email,
                    name: user.name,
                    randomKey: 'Hey cool'
                }
            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token;
            return session;
        },
    },
    pages: {
        signIn: "/gdiadmin/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

