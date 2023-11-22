import Image from 'next/image'
import React from 'react';
import { Button } from "@nextui-org/react";
import Sendenquerybtn from '../Sendenquerybtn';
import { useRouter } from 'next/navigation';

const Slide = ({ img, title, mainTitle, price }) => {
    const router = useRouter()
    return (
        <div className="outline-none border-none relative slidercontentsec">
            <div className="text-center z-[100]  drop-shadow-2xl absolute left-[50%] transform translate-x-[-50%] lg:-translate-y-[-50%] md:translate-y-[60%] sm:translate-y-[20%] max-w-[250px] sm:max-w-[350px] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none ">
                <h3 className="text-accent text-[24px] lg:text-[28px]">{title}</h3>
                <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
                    {mainTitle}
                </h2>

                <h3 className="text-[24px] text-gray-800">
                    starting at{" "}
                    <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
                    .00
                </h3>
                <div className='flex justify-evenly mt-3 gap-2 herosectionbtngrp'>
                    <Sendenquerybtn />
                    <Button className='bg-orange text-white'  radius='sm' variant="flat" onClick={() => router.push('/products/All')}>
                        All products
                    </Button>
                </div>

            </div>

            <Image
                className="w-[100%] h-[300px] md:h-[600px] object-cover object-right md:object-left-bottom"
                src={img}
                alt="banner"
                width={2000}
                height={2000}
            />
            <div className="absolute inset-0  bg-neutral-500 opacity-50"></div>
        </div>
    )
}

export default Slide