// import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const POST = async (req) => {
    try {
        const body = await req.json();
        console.log(body, "maildat")
        const EMAIL = "gditiles@gmail.com";
        // const PASSWORD = "Importers@007"
        let config = {
            service: 'gmail',
            auth: {
                user: "gditiles@gmail.com",
                pass: "uphaubmuztqfweay"
            }
        }
        let transporter = nodemailer.createTransport(config);
        let mail = generateMailHTML(body)
        let message = {
            from: EMAIL,
            to: "sreehari9188@gmail.com",
            subject: "User enquery",
            html: mail
        }
        transporter.sendMail(message).then(() => {
            console.log("s")
        }).catch(error => {
            console.log(error)
        })
        return new NextResponse(JSON.stringify("mail", { status: 200 }));
    } catch (err) {
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};

const generateMailHTML = ({ name, email, phoneNumber, details, productid }) => {
    const numHTML = phoneNumber ? `<div class="items"><p>Contact number</p><p>${phoneNumber}</p></div>` : '';
    const itemHTML = productid ? `<div class="items"><p>Product</p><p><a href="${process.env.FRONTEND_URL}/${productid || ''}">Go To Product</a></p></div>` : '';
    const nameHTML = name ? `<div class="items"><p>Name</p><p>${name}</p></div>` : '';
    const emailHTML = email ? `<div class="items"><p>Email</p><p>${email}</p></div>` : '';
    const detailsHTML = details ? `<div class="items"><p>Message</p><p>${details}</p></div>` : '';

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
          body {
            font-family:sans-serif
        }

        header {
            padding: 25px 25px;
            text-align: center;
            border-bottom: 3px solid rgb(255, 102, 0);
        }

        section h1 {
            color: rgb(255, 102, 0);
            /* font-size: 25px; */
        }
        main h2 {
            color: rgb(255, 102, 0);
            text-align: center;
        }

        main {
            background-color: #F9F9F9;
            padding: 15px;
            display: grid;
            justify-content: center;
        }

        .items {
            display: flex;
            align-items: center;
        }

        .items p {
            color: #252525;
        }

        .items p:nth-child(1) {
            font-size: 18px;
            font-weight: 700;
        }
        p{
            margin:5px 8px;
        }

        a {
            margin-left: 5px;
        }

        button {
            padding: 10px 20px;
            background-color: #52D5B6;
            color: #fff;
            border-radius: 4px;
            font-size: 14px;
            border: none;
            font-weight: 600;
            cursor: pointer;
            width: 60%;
            justify-self: center;
            margin-top: 10px;
        }
          </style>
      </head>
      <body>
          <section>
              <header>
                  <h1>GDI Tiles</h1>
              </header>
              <main>
                  <h2>New Inquiry</h2>
                  ${nameHTML}
                  ${emailHTML}
                  ${numHTML}
                  ${itemHTML}
                  ${detailsHTML}
                  <button>Admin Panel</button>
              </main>
          </section>
      </body>
      </html>
    `;
};
