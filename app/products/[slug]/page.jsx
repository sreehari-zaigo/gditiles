"use client";
import Footer from '@/app/components/footer/Footer';
import Navbarmenu from '@/app/components/navbar/Navbarmenu';
import Product from '@/app/components/products/Product';
import { Spinner } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';


const getData = async (page, cat) => {
    const res = await fetch(
        `/api/product?page=${page}&filterBy=${cat || ""}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

const Page = ({ params }) => {
    const { slug } = params;
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { products } = await getData(page, slug);
                setItems((prevItems) => [...prevItems, ...products]);
                if (products.length == 0) {
                    setHasMore(false)
                }
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    }, [page, slug]);

    const fetchMoreData = () => {
        setPage((page) => page + 1);
    };
    if (items.length == 0) {
        return (
            <div className="light text-foreground bg-background mx-auto h-[100vh] max-w-[90%] lg:px-12 grid place-content-center">
                <Spinner size='lg'color='warning' />
            </div>
        )
    }
    return (
        <div className=''>
            <Navbarmenu />
            <div className="light text-foreground bg-background mx-auto max-w-[90%] mt-6 lg:px-12">
                <div className="mx-auto max-w-[95%] lg:max-w-[100%] lg:mt-20 ">
                    <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                        <div className="w-24 h-2 bg-orange mb-4 mx-auto"></div>
                        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">{slug} Products</h2>
                    </div>
                    <div className="flex justify-center items-center md:mt-10 lg:mt-20">
                        <InfiniteScroll
                            dataLength={items.length}
                            next={fetchMoreData}
                            hasMore={hasMore}
                            loader={
                                <div className='w-[98%] grid place-content-center overflow-hidden mt-2' >
                                    <Spinner size="md"color='warning' />
                                </div>
                            }
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-hidden">
                                {items.map((product, index) => (
                                    <Product
                                        key={index}
                                        productId={product.id}
                                        image={product.main_image}
                                        name={product.product_name}
                                        size={product.product_size}
                                        finish={product.product_material}
                                        price={product.product_price}
                                        colors={product.product_colors}
                                        category={product.product_category}
                                    />
                                ))}
                            </div>
                        </InfiniteScroll>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Page;





