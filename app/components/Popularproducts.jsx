"use client"
import { useEffect, useState } from "react";
import Product from "./products/Product";
import { Spinner } from "@nextui-org/react";
const getData = async (page) => {
    const res = await fetch(
        `/api/product?page=${page}&popular_products="true"`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};
const Popularproducts = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { popularProducts } = await getData(page);
                setItems((prevItems) => [...prevItems, ...popularProducts]);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    }, [page]);
    if (items.length == 0) {
        return (
            <div className="light text-foreground bg-background mx-auto h-[100vh] max-w-[90%] lg:px-12 grid place-content-center">
                <Spinner size='lg' color='warning' />
            </div>
        )
    }
    return (
        <div className="mx-auto max-w-[95%] lg:max-w-[100%] lg:mt-20 mt-10">
            <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <div className="w-24 h-2 bg-orange mb-4 mx-auto"></div>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">Popular Products</h2>
            </div>
            <div className="flex justify-center items-center md:mt-10 lg:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
            </div>
        </div>
    )
}

export default Popularproducts;
