import * as Yup from 'yup';

export const addproductValidationschema = Yup.object().shape({
    productname: Yup.string()
        .required('product name is required'),
    product_desc: Yup.string()
        .required('Description is required'),
    productDiscountPrice: Yup.string()
        .required("required")

});