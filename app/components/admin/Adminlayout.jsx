"use client"
import React, { useState } from 'react';
import Layout from './addproduct/Layout';
import Productname from './addproduct/Productname';
import Category from './addproduct/Category';
import Priceinput from './addproduct/Priceinput';
import Productdetailsinput from './addproduct/Productdetailsinput';
import Addproductimage from './addproduct/Addproductimage';
import { Button, useDisclosure } from '@nextui-org/react';
import useModal from '@/hooks/modal';
import Modallayout from '../modal/Modal';
import CategoryInput from './addcategory/Categorymodal';
import { Authinputs } from './Input';
import useFormStore from '@/hooks/Collectformdata';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';



const Adminlayout = () => {
    const [errors, setErrors] = useState({})
    const onOpen = useModal((state) => state.onOpen);
    const isOpen = useModal((state) => state.isOpen);
    const onClose = useModal((state) => state.onClose);
    const formData = useFormStore((state) => state.formData);
    const setFormData = useFormStore((state) => state.setFormData);
    const router = useRouter()
    const validateFormData = () => {
        const errors = {}
        if (formData.product_name == "") {
            errors.product_name = 'Product name is required';
        }
        if (formData.product_desc == "") {
            errors.product_desc = 'Product description is required';
        }
        if (formData.main_image == "") {
            errors.main_image = 'Image is required';
        }
        if (formData.product_price == 0 || "") {
            errors.product_price = 'Product price is required';
        }
        if (formData.product_category_id == "") {
            errors.product_category_id = 'Please select the category';
        }
        if (formData.product_colors.length==0) {
            errors.product_colors = 'Product color is required';
        }
        setErrors(errors);
        return errors;
    };
    const handleSubmit = async () => {
        const errors = validateFormData();
        if (Object.keys(errors).length > 0) {
            Object.values(errors).forEach((errorMessage) => {
                toast.error(errorMessage)
            });
            return;
        }
        try {
            let response = await fetch("/api/product", {
                method: "POST",
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                toast.error('🦄 Wow so easy!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                toast.success('Successfully product added!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                router.push('/gdiadmin')
                useFormStore.getState().clearFormData();
            }
        } catch (error) {
            toast.error('Some thing went wrong!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }
    return (
        <>
            <div className='p-4 flex gap-3 justify-end'>
                <Button className='bg-orange' radius='sm' onPress={onOpen}>
                    Add Category
                </Button>
            </div>
            <div className='grid grid-cols-2 gap-4 md:gap-6 grid-flow-row auto-rows-max' >
                <Layout heading="Description">
                    <Productname />
                </Layout>
                <Layout heading="Product image" children={<Addproductimage />} />
                <Layout heading="Category" children={<Category />} />
                <Layout heading="Price" children={<Priceinput />} />
                <Layout heading="Product details" children={<Productdetailsinput />} />
            </div>
            <div className='p-x py-4 flex'>
                <Button type='submit' onClick={handleSubmit} className='bg-orange' radius='sm'>
                    save
                </Button>
            </div>
            <Modallayout isOpen={isOpen} onClose={onClose} title="Add category" body={<CategoryInput onClose={onClose} />} />
        </>

    )
}

export default Adminlayout