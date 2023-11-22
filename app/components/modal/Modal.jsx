import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function Modallayout({ isOpen, onClose, body, footer,size,title }) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={() => onClose()} isDismissable={false} size={size}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-gray-900">{title}</ModalHeader>
              <ModalBody>
                {body}
              </ModalBody>
              <ModalFooter>
                {footer}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
