import React, { useState } from 'react';
import { Input, Textarea } from "@nextui-org/react";
import useFormStore from '@/hooks/Collectformdata';

const Productname = () => {
    const formData = useFormStore((state) => state.formData);
    const setFormData = useFormStore((state) => state.setFormData);
    const [isInvalid, setIsInvalid] = useState(false);
    const validateProductname = (value) => {
        const isValid = value.trim() !== '';
        setIsInvalid(!isValid);
        setFormData({ ...formData, "product_name": value });
    };

    return (
        <>
            <div className='py-3'>
                <Input
                    type="text"
                    label="Product name"
                    labelPlacement="outside"
                    placeholder="product name"
                    radius="sm"
                    className="text-gray-700"
                    id='product_name'
                    isInvalid={isInvalid}
                    color={isInvalid ? "danger" : ""}
                    errorMessage={isInvalid && "Please enter a product name"}
                    value={formData.product_name}
                    onValueChange={validateProductname}
                />
            </div>
            <div className='py-3'>
                <Textarea
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    className="text-gray-700"
                    radius="sm"
                    id='product_desc'
                    value={formData.product_desc}
                    onValueChange={(value) => setFormData({ ...formData, "product_desc": value })}
                />
            </div>
        </>
    );
};

export default Productname;
