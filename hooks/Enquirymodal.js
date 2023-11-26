// modalStore.js
import { create } from 'zustand';
import { toast } from 'react-toastify';

const useModalStore = create((set) => ({
  isOpen: false,
  onOpen: async (productid = "") => {
    try {
      let showform = isShowform()
      if (!showform) set({ isOpen: true })
      let { name, email, phoneNumber, noshowFormAgain } = showform
      if (noshowFormAgain) {
        let data;
        if (typeof productid == string) {
          data = { name, email, phoneNumber, productid: productid }
        } else {
          data = { name, email, phoneNumber }
        }
        let response = await fetch("/api/sendmail", {
          method: "POST",
          body: JSON.stringify(data),
        });
        if (response.ok) {
          toast.success('Enquery submitted', {
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
        return;
      }
      set({ isOpen: true })
    } catch (error) {
      console.log(error)
    }
  },
  onClose: () => set({ isOpen: false }),
  onOpenChange: (newState) => set({ isOpen: newState }),
}));

const isShowform = () => {
  try {
    const cookieName = "enquiryFormData";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${cookieName}=`)) {
        const decodedValue = decodeURIComponent(cookie.substring(cookieName.length + 1));
        try {
          const parsedObject = JSON.parse(decodedValue);
          return parsedObject;
        } catch (error) {
          console.error("Error parsing cookie value as JSON:", error);
        }
      }
    }
    return null;
  } catch (error) {
  }
};



export default useModalStore;
