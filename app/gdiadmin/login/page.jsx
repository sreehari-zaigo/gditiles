"use client"
import React from "react";
import { Input, Button } from "@nextui-org/react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import GdiLogo from "@/app/components/logo/GdiLogo";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter()
  async function myFunction() {
    const session = await getSession()
    if (session) router.push("/gdiadmin")
  }
  myFunction()
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [value, setValue] = React.useState("");
  const [password, setPassword] = React.useState("");
  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      email_id: value,
      password: password,
      redirect: true,
      callbackUrl: "/gdiadmin/",
    });
  };

  return (
    <div className="bg-[#F4F7FF] py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
            <div className="mb-10 text-center md:mb-16">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
                <GdiLogo />
                <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Admin Login
                </h2>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <Input type="email" label="Email"
                  isInvalid={isInvalid}
                  color={isInvalid ? "danger" : ""}
                  errorMessage={isInvalid && "Please enter a valid email"}
                  value={value}
                  onValueChange={setValue}
                  className="text-gray-600"
                />
              </div>
              <div className="mb-6">
                <Input
                  label="Password"
                  className="text-gray-600"
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  value={password}
                  onValueChange={setPassword}
                />
              </div>
              <div className="mb-10">
                <Button
                  className="border-orange w-full cursor-pointer rounded-md border bg-orange py-3 px-5 text-white transition hover:bg-opacity-90"
                  type="submit"
                >
                  Sign In
                </Button>
              </div>
            </form>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
