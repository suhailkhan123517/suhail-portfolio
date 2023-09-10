"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-2xl p-10 w-[50%] rounded-3xl">
          <h1 className="font-satoshi font-semibold text-2xl text-black tracking-wide">
            Create your account
          </h1>
          <p className="text-lg text-gray-600 mt-2">to continue to Portfolio</p>

          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="mt-5 border border-gray-300 py-3 px-4 w-full flex items-center justify-between rounded-md hover:bg-gray-200 transition duration-300 group"
          >
            <Image
              src="/assets/images/github.svg"
              width={20}
              height={20}
              className="object-contain"
              alt="github images"
            />
            <span>Continue with Github</span>
            <BsArrowRight className="opacity-0 group-hover:opacity-100 transition duration-300 group group-hover:translate-x-2" />
          </button>
          <button
            onClick={() => {
              signIn("google", { callbackUrl: "/" });
            }}
            className="mt-3 border border-gray-300 py-3 px-4 w-full flex items-center justify-between rounded-md hover:bg-gray-200 transition duration-300 group"
          >
            <Image
              src="/assets/images/google.svg"
              width={20}
              height={20}
              className="object-contain"
              alt="github images"
            />
            <span>Continue with Google</span>
            <BsArrowRight className="opacity-0 group-hover:opacity-100 transition duration-300 group group-hover:translate-x-2" />
          </button>

          <div className="text-center my-4">or</div>

          <form>
            <div>
              <div className="flex items-start gap-3">
                <div className="flex flex-col gap-2">
                  <label className="text-black font-medium">First Name</label>
                  <input
                    type="text"
                    className="border border-gray-300 py-3 px-4 rounded-md w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-black font-medium">Last Name</label>
                  <input
                    type="text"
                    className="border w-full border-gray-300 py-3 px-4 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-black font-medium">Email Address</label>
              <input
                type="type"
                className="border border-gray-300 py-3 px-4 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-black font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="border border-gray-300 py-3 px-4 rounded-md w-full"
                />
                {showPassword ? (
                  <>
                    <AiFillEyeInvisible
                      className="absolute top-[10px]   right-3 text-3xl text-gray-700 cursor-pointer"
                      onClick={showPasswordToggle}
                    />
                  </>
                ) : (
                  <>
                    <AiFillEye
                      className="absolute top-[10px]  right-3 text-3xl text-gray-700 cursor-pointer"
                      onClick={showPasswordToggle}
                    />
                  </>
                )}
              </div>
            </div>

            <button className="bg-gray-800 hover:bg-black w-full mt-5 p-4 rounded-md text-white transition duration-300">
              Continue
            </button>
          </form>

          <p className="mt-6 text-gray-500">
            No Account ?{" "}
            <Link href="/sign-in" className="text-[#ff5722] hover:underline">
              Sign up
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
