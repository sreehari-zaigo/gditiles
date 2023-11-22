import NextImage from "next/image";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { BiMailSend } from "react-icons/bi";
import useModalStore from "@/hooks/Enquirymodal";
import styles from '../styles/popularproducts.module.css'
import { useRouter } from "next/navigation";

const Product = ({productId, image, name, size, finish, price, colors,category }) => {
    const router = useRouter()
    const onOpen = useModalStore((state) => state.onOpen);
    const handleEnquiryButtonClick = () => {
        onOpen(productId)
    }
    return (
        <div className={`${styles.card} p-2 rounded-md  cursor-pointer border-current border-2`} onClick={() => router.push(`/details/${productId}`)}>
            <Image
                as={NextImage}
                width={500}
                height={500}
                src={image}
                radius="md"
                className={styles.imagewrapper}
                isZoomed="true"
            />
            <div className="flex py-2">
                <AvatarGroup size="sm" isGrid max={3}>
                    {
                        colors.map((colorimg, index) => (
                            <Avatar key={index} src={colorimg} />
                        ))
                    }
                </AvatarGroup>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center" >
                    <h3 className="text-base font-bold pr-1">{name}</h3>(<span className="text-sm font-medium px-1">{category.category_name}</span>)
                </div>
                <div className="flex">
                    <p className="text-sm font-medium">Size<span className="text-xs font-normal pl-2">{size}</span></p>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-base"><span>$</span>{price}<span className="text-xs font-medium px-1 text-slate-700">sq. ft</span></h3>
                    <Button className="bg-orange" startContent={<BiMailSend />} isLoading={false} variant="flat" radius="sm" spinnerPlacement="start" onPress={handleEnquiryButtonClick} >
                        Send an enquery
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default Product