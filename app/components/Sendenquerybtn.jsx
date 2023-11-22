import { Button } from "@nextui-org/react";
import { BiMailSend } from "react-icons/bi";
import useModalStore from "@/hooks/Enquirymodal";
const Sendenquerybtn = ({ id = "" }) => {
    const onOpen = useModalStore((state) => state.onOpen);
    return (
        <Button startContent={<BiMailSend />} onPress={() => onOpen(id)} isLoading={false} variant="flat" radius="sm" spinnerPlacement="start" className="bg-orange text-white">
            Send an enquery
        </Button>
    )
}

export default Sendenquerybtn