import './globals.css'
import { Inter } from 'next/font/google';
import { Providers } from './providers/Providers';
import { ToastContainer, toast } from 'react-toastify';
import SendEnquiryForm from './components/sendEnquiry/SendEnquiryForm';
const inter = Inter({ subsets: ['latin'] })
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Providers';
import Error from './error';

export const metadata = {
  title: 'GDI Tiles - Elevate Your Spaces with Premium Tiles and Elegant Designs',
  description: 'Discover a world of sophistication and refinement with GDI Tiles. We offer premium tiles for both commercial and residential buildings, combining exquisite designs with lasting quality. Redefine elegance in the tile industry with our diverse range of tiles that cater to various architectural styles. Elevate your spaces with GDI Tiles – where premium quality meets unparalleled style.',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/gdilogo.png' />
      </head>
      <body className={`${inter.className} bg-slate-50`}>
        <AuthProvider>
          <Providers>
            <SendEnquiryForm />
            {children}
          </Providers>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html >
  )
}
