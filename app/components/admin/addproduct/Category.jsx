"use client"
import React, { useState } from 'react';
import { Select, SelectItem, Spinner } from "@nextui-org/react";
import useFormStore from '@/hooks/Collectformdata'; // Import your form data hook
import useSWR from 'swr';
const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
};
const Category = () => {
    const { data, isLoading, isError } = useSWR(
        `/api/categories`,
        fetcher
    );
    const [isInvalid, setIsInvalid] = useState(false);
    const formData = useFormStore((state) => state.formData);
    const setFormData = useFormStore((state) => state.setFormData);

    const validateCategory = (e) => {
        const selectedCategories = e.target.value;
        console.log(selectedCategories)
        if (selectedCategories) {
            setFormData({ ...formData, "product_category_id": selectedCategories });
            setIsInvalid(false);
        } else {
            setIsInvalid(true);
        }
    };

    return (
        <div className='py-3'>
            <Select
                labelPlacement="outside"
                label="Product Category"
                placeholder="Select a category"
                className="text-gray-700"
                radius="sm"
                color={isInvalid ? "danger" : ""}
                errorMessage={isInvalid ? "Please select a product category" : ""}
                onChange={validateCategory}
                selectedKeys={[formData.product_category_id]}
            >
                {data?.map((cat,index) => ( 
                    <SelectItem key={cat.id} value={cat.id}>
                        {cat.category_name}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
}

export default Category;
