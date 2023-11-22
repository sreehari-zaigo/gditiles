'use client'
import { useEffect } from 'react';
import Image from 'next/image'
import { Button } from "@nextui-org/react";
import Popularproducts from './components/Popularproducts';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Sliderhero from './components/slider/Slider';
import Footer from './components/footer/Footer';
import useModalStore from '@/hooks/Enquirymodal';
import Navbarmenu from './components/navbar/Navbarmenu';

export default function Home() {
  return (
    <div className=''>
      <Navbarmenu/>
      <div className="light text-foreground bg-background mx-auto max-w-[90%] lg:px-12">
        <Sliderhero />
        <Popularproducts />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
