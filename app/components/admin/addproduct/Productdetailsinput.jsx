import React, { useCallback, useState } from 'react';
import { Input, Image } from "@nextui-org/react";
import NextImage from "next/image";
import { LuImagePlus, LuTrash2 } from "react-icons/lu";
import useFormStore from '@/hooks/Collectformdata';
import { CldUploadWidget } from 'next-cloudinary';

const Productdetailsinput = () => {
    const formData = useFormStore((state) => state.formData);
    const setFormData = useFormStore((state) => state.setFormData);
    const [isInvalid, setIsInvalid] = useState(false);
    const validateProductmaterial = (value) => {
        const isValid = value.trim() !== '';
        setIsInvalid(!isValid);
        setFormData({ ...formData, "product_material": value });
    };
    const validateProductsize = (value) => {
        const isValid = value.trim() !== '';
        setIsInvalid(!isValid);
        setFormData({ ...formData, "product_size": value });
    };
    const handleColorImageUpload = useCallback((result) => {
        const updatedSubImages = [...formData.product_colors, result.info.secure_url];
        setFormData({ ...formData, product_colors: updatedSubImages });
    }, [formData]);

    return (
        <>
            {/* <div className='py-3'>
                <Input
                    type="text"
                    label="Product material (add with , seprator)"
                    labelPlacement="outside"
                    placeholder="eg: Matt, Wodden"
                    radius="sm"
                    className="text-gray-700"
                    isInvalid={isInvalid}
                    color={isInvalid ? "danger" : ""}
                    errorMessage={isInvalid && "Please enter a product material"}
                    value={formData.product_material}
                    onValueChange={validateProductmaterial}
                />
            </div> */}
            <div className='py-3'>
                <Input
                    type="text"
                    label="Product size (add with , seprator)"
                    labelPlacement="outside"
                    placeholder="eg: 600x600mm,500x500mm"
                    radius="sm"
                    className="text-gray-700"
                    isInvalid={isInvalid}
                    color={isInvalid ? "danger" : ""}
                    errorMessage={isInvalid && "Please enter a product size"}
                    value={formData.product_size}
                    onValueChange={validateProductsize}
                />
            </div>
            <div className='py-3'>
                <div className="text-small font-medium text-foreground pb-1.5">
                    Color
                </div>

                <div className='flex gap-2'>

                    {formData.product_colors?.map((val, index) => ( 
                        <div className="relative group" key={index}>
                            <Image src={val} alt='' width={45} height={45} as={NextImage} radius='full' className="w-45 h-45" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="relative z-10">
                                    <button className="bg-red-400 text-white p-2 rounded-full">
                                        <LuTrash2 />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {formData.product_colors?.length < 15 && (
                        <CldUploadWidget
                            onUpload={handleColorImageUpload}
                            uploadPreset="lv5e1z6a"
                            options={{
                                maxFiles: 1
                            }}
                        >
                            {({ open }) => {
                                return (
                                    <div onClick={() => open?.()}>
                                        <LuImagePlus className='text-slate-500 rounded-full border-2 border-dashed w-[45px] h-[45px] text-3xl p-2 cursor-pointer' />
                                    </div>
                                );
                            }}
                        </CldUploadWidget>
                    )}
                </div>

            </div>
        </>
    )
}

export default Productdetailsinput;