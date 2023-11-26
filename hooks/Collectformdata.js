// store.js
import { create } from 'zustand';

const initialFormData = {
  product_price: 0,
  product_price_discount: 0,
  product_desc: '',
  product_name: '',
  product_material: '',
  main_image: '',
  sub_images: [],
  product_category_id: '',
  product_size: '',
  product_colors: [],
};

const useFormStore = create((set) => ({
  formData: { ...initialFormData },
  setFormData: (data) => set({ formData: data }),
  clearFormData: () => set({ formData: { ...initialFormData } }),
}));

export default useFormStore;
