'use client'
import Sendenquerybtn from "@/app/components/Sendenquerybtn";
import Footer from "@/app/components/footer/Footer";
import Navbarmenu from "@/app/components/navbar/Navbarmenu";
import { Image, Spinner, Tooltip } from "@nextui-org/react";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }
    return data;
};

const page = ({ params }) => {
    const { slug } = params;
    const { data, error, isValidating } = useSWR(
        `/api/product/${slug}`,
        fetcher
    );

    const [activeImg, setActiveImage] = useState("");
    const [subImages, setSubImages] = useState([]);

    useEffect(() => {
        if (data) {
            console.log(data.sub_images);

            setActiveImage(data.main_image);

            setSubImages((prevSubImages) => {
                const newSubImages = [data.main_image, ...data.sub_images, ...prevSubImages];
                return newSubImages;
            });
        }
    }, [data]);



    if (isValidating) {
        return (
            <div className="light text-foreground bg-background mx-auto h-[100vh] max-w-[90%] lg:px-12 grid place-content-center">
                <Spinner size='lg' color='warning' />
            </div>
        )
    }

    const handleSubImageClick = (img) => {
        setActiveImage(img)
    }

    return (
        <>
            <Navbarmenu />
            <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
                <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full mb-8 md:w-1/2 md:mb-0">
                            <div className="top-0 z-50 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                    <Image
                                        as={NextImage}
                                        width={1000}
                                        height={900}
                                        src={activeImg}
                                        alt="NextUI hero Image"
                                        radius="sm"
                                        className="object-cover w-full lg:h-full"
                                    />
                                </div>
                                <div className="flex-wrap hidden md:flex ">
                                    {subImages?.map((img, index) => (
                                        <div className="w-1/2 p-2 sm:w-1/4 " key={index} onClick={() => handleSubImageClick(img)}>
                                            <span className="block border border-transparent hover:border-rose-500 p-2">
                                                <Image
                                                    as={NextImage}
                                                    width={300}
                                                    height={200}
                                                    radius="none"
                                                    src={img}
                                                    alt="NextUI hero Image"
                                                    className="object-cover w-full lg:h-20"
                                                />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="lg:pl-20">
                                <div className="mb-8 ">
                                    <h2 className="max-w-xl mb-6 text-2xl font-bold text-black md:text-4xl">
                                        {data?.product_name}</h2>
                                    <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                        {data?.product_price_discount === 0 ? (
                                            <span>{data?.product_price}$</span>
                                        ) : (
                                            <>
                                                <span>{data?.product_price_discount}$</span>
                                                <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                                                    {data?.product_price}$
                                                </span>
                                            </>
                                        )}

                                    </p>
                                    <p className="max-w-md text-gray-700 dark:text-gray-400">
                                        {data?.product_desc}
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h2
                                        className="w-16 pb-1 mb-4 text-2xl font-bold border-b border-[#FF6600] text-black">
                                        Colors</h2>
                                    <div className="flex flex-wrap -mx-2 -mb-2">
                                        {data?.product_colors.map((color, index) => (
                                            <div className="p-1 mb-2 mr-3" key={index}>
                                                <Image
                                                    className="w-8 h-8 rounded-full bg-stone-400"
                                                    as={NextImage}
                                                    width={300}
                                                    height={200}
                                                    radius="none"
                                                    src={color}
                                                    alt="product colors"
                                                />
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div className="mb-8">
                                    <h2
                                        className="w-16 pb-1 mb-6 text-xl font-semibold border-b border-[#FF6600] text-black">
                                        Material</h2>
                                    <div>
                                        <div className="flex flex-wrap -mx-2 -mb-2">
                                            <div
                                                className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md  text-gray-600">
                                                {data.product_category.category_name}
                                            </div>
                                            {/* <button
                                            className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-rose-500 hover:text-rose-600 text-gray-600">
                                            Wooden
                                        </button> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8 ">
                                    <h2
                                        className="w-16 pb-1 mb-4 text-xl font-semibold border-b border-[#FF6600] text-black">
                                        Size</h2>
                                    <div>
                                        <div className="flex flex-wrap -mb-2">
                                            <div
                                                className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md text-gray-600">
                                                {data.product_size}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="w-32 mb-8 ">
                                <label for=""
                                    className="w-full pb-1 text-xl font-semibold text-gray-700 border-b border-rose-500 dark:border-gray-600 dark:text-gray-400">Quantity</label>
                                <div className="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
                                    <button
                                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                        <span className="m-auto text-2xl font-thin">-</span>
                                    </button>
                                    <input type="number"
                                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                        placeholder="1" />
                                    <button
                                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div> */}
                                <div className="flex flex-wrap items-center gap-4">
                                    <Sendenquerybtn id={data.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer /> */}
        </>
    )
}

export default page