import React from 'react'
import { Input, Image } from "@nextui-org/react";
import { CldUploadWidget } from "next-cloudinary";
import { useCallback } from "react";
import NextImage from "next/image";
import { LuImagePlus, LuTrash2 } from "react-icons/lu";
import useFormStore from '@/hooks/Collectformdata';

const Addproductimage = () => {

    const formData = useFormStore((state) => state.formData);
    const setFormData = useFormStore((state) => state.setFormData);
    
    const handleUpload = useCallback((result) => {
        setFormData({ ...formData, "main_image": result.info.secure_url });
    }, [formData]);

    const handleSubImageUpload = useCallback((result) => {
        const updatedSubImages = [...formData.sub_images, result.info.secure_url];
        setFormData({ ...formData, sub_images: updatedSubImages });
    }, [formData]);

    return (
        <div className='py-3 grid grid-rows-2 grid-cols-4 h-full gap-2'>
            <div className='w-[200px] h-[220px] row-span-2 col-span-2'>
                <CldUploadWidget
                    onUpload={handleUpload}
                    uploadPreset="lv5e1z6a"
                    options={{
                        maxFiles: 1
                    }}
                >
                    {({ open }) => {
                        return (
                            <div
                                onClick={() => open?.()}
                                className="relative hover:opacity-70 transition grid place-items-center rounded-lg  text-xl p-3 w-full h-full cursor-pointer"
                            >
                                {formData.main_image ? (
                                    <div className="absolute inset-0 w-full h-full">
                                        <NextImage
                                            width={500}
                                            height={500}
                                            src={formData.main_image}
                                            alt="House"
                                            className='object-cover w-full h-full rounded-lg'
                                        />
                                    </div>
                                ) : (
                                    <div className='grid place-items-center rounded-lg border-2 border-dashed text-xl p-3 w-full h-full cursor-pointer'>
                                        <LuImagePlus
                                            size={50}
                                            className='text-slate-400 text-6xl font-extralight'
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    }}
                </CldUploadWidget>
            </div>
            {formData.sub_images?.map((val, index) => (
                <CldUploadWidget
                    key={index}
                    onUpload={handleSubImageUpload}
                    uploadPreset="lv5e1z6a"
                    options={{
                        maxFiles: 1
                    }}
                >
                    {({ open }) => {
                        return (
                            <div className='col-span-1 relative' onClick={() => open?.()}>
                                <div className="absolute inset-0 w-full h-full">
                                    <NextImage
                                        width={500}
                                        height={500}
                                        src={val}
                                        alt="House"
                                        className='object-cover w-full h-full rounded-lg'
                                    />
                                </div>
                            </div>
                        );
                    }}
                </CldUploadWidget>
            ))}
            {formData.sub_images?.length < 3 && (
                <CldUploadWidget
                    onUpload={handleSubImageUpload}
                    uploadPreset="lv5e1z6a"
                    options={{
                        maxFiles: 1
                    }}
                >
                    {({ open }) => {
                        return (
                            <div className='col-span-1 relative' onClick={() => open?.()}>
                                <div className='grid place-items-center rounded-lg border-2 border-dashed text-xl p-3 w-full h-full cursor-pointer'>
                                    <LuImagePlus
                                        size={50}
                                        className='text-slate-400 text-6xl font-extralight'
                                    />
                                </div>
                            </div>
                        );
                    }}
                </CldUploadWidget>
            )}
        </div>
    );

}

export default Addproductimage