"use client"
import React, { useState } from "react";
import useModalStore from "@/hooks/Enquirymodal";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { toast } from "react-toastify";

const COOKIE_FORMKEY = "enquiryFormData";

export default function SendEnquiryForm() {
  const isOpen = useModalStore((state) => state.isOpen);
  const onClose = useModalStore((state) => state.onClose);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    noshowFormAgain: false
  });


  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = isEmailTouched && !validateEmail(formData.email);

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
  };
  const setCookie = (name, value, expirationDate) => {
    document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/; secure; samesite=strict;`;
  };

  const handleSubmit = async () => {
    if (formData.noshowFormAgain) {
      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 24 * 60 * 60 * 1000);
      setCookie(COOKIE_FORMKEY, JSON.stringify(formData), expirationTime);
    }
    const { name, email, phoneNumber } = formData;
    let res = await fetch("/api/sendmail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (res.ok) {
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
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={() => onClose()}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className="text_orange lg:text-2xl md:text-xl sm:text-lg">Request a Callback</h1>
                <p className="text-gray-500 text-xs font-normal">Please provide your contact information below, and we will call you back as soon as possible to assist you with any questions or requests you may have.</p>
              </ModalHeader>
              <ModalBody>
                <Input type="text" label="Name" className="text-gray-600" value={formData.name} onValueChange={(name) => setFormData({ ...formData, name })} />
                <Input type="email" label="Email" isInvalid={isInvalid} color={isInvalid ? "danger" : ""} onBlur={handleEmailBlur} errorMessage={isInvalid && "Please enter a valid email"} value={formData.email} onValueChange={(email) => setFormData({ ...formData, email })} className="text-gray-600" />
                <Input type="number" label="Phone number" value={formData.phoneNumber} onValueChange={(phoneNumber) => setFormData({ ...formData, phoneNumber })} className="text-gray-600" />
                <Checkbox checked={formData.noshowFormAgain} onValueChange={(noshowFormAgain) => setFormData({ ...formData, noshowFormAgain })}>
                  <span className="text-gray-500 text-sm/[5px]">Don't show this form again?</span>
                </Checkbox>
              </ModalBody>
              <ModalFooter>
                <Button className="border-orange" variant="bordered" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-orange text-white" onPress={handleSubmit}>
                  Send
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
