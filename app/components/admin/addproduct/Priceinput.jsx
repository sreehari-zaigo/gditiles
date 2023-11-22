import React, { useState } from 'react'
import { Input, Textarea } from "@nextui-org/react";
import useFormStore from '@/hooks/Collectformdata';

const Priceinput = () => {
    const formData = useFormStore((state) => state.formData);
    const setFormData = useFormStore((state) => state.setFormData);
    const [isInvalid, setIsInvalid] = useState(false);
    const validateProductprice = (value) => {
        const isValid = value.trim() !== '';
        setIsInvalid(!isValid);
        const floatValue = parseFloat(value);
        setFormData({ ...formData, "product_price": floatValue });
    };
    return (
        <div className='py-3 flex flex-col sm:flex-row gap-3'>
            <Input
                type="number"
                label="Product price"
                labelPlacement="outside"
                placeholder="eg: 55.00"
                radius="sm"
                className="text-gray-700 justify-center"
                endContent={
                    <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$</span>
                    </div>
                }
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : ""}
                errorMessage={isInvalid && "Please enter a product price"}
                value={formData.product_price}
                onValueChange={validateProductprice}
            />
            <Input
                type="number"
                id='productDiscountPrice'
                name='productDiscountPrice'
                label="Product discount price"
                labelPlacement="outside"
                placeholder="eg: 53.00"
                radius="sm"
                className="text-gray-700 justify-center"
                endContent={
                    <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$</span>
                    </div>
                }
                value={formData.product_price_discount}
                onValueChange={(value) => setFormData({ ...formData, "product_price_discount": value })}
            />
        </div>

    )
}

export default Priceinput;