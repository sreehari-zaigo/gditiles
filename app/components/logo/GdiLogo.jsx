import Image from "next/image"
import { useRouter } from "next/navigation"

const GdiLogo = () => {
  const router = useRouter()
  return (
    <>
      <Image src="/gdilogo.png" alt="logo" className="cursor-pointer" height={50} width={100} onClick={() => router.push("/")} />
    </>
  )
}

export default GdiLogo