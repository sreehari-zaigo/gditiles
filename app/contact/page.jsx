"use client";
import Footer from '@/app/components/footer/Footer';
import Navbarmenu from '@/app/components/navbar/Navbarmenu';
import Contact from '../components/contact/Contact';
const Page = () => {
    return (
        <div className=''>
            <Navbarmenu />
            <div className="light text-foreground bg-background mx-auto max-w-[90%] lg:px-12">
                <div className="mx-auto max-w-[95%] lg:max-w-[100%] lg:mt-16">
                    <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                        <div className="w-24 h-2 bg-orange  mb-4 mx-auto"></div>
                        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">Contact us</h2>
                    </div>
                    <>
                        <Contact />
                    </>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Page;





