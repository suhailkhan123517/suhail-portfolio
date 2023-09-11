"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div className="bg-white shadow-2xl py-6  px-10 w-[40%] rounded-3xl">
          <div className="flex items-center gap-5">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={35}
              height={35}
              className="object-contain"
            />
            <span className="font-satoshi font-semibold text-2xl text-black tracking-wide">
              Portfolio
            </span>
          </div>
          <h1 className="font-satoshi font-semibold text-xl text-black tracking-wide mt-3">
            Sign in
          </h1>
          <p className="text-lg text-gray-600">to continue to Portfolio</p>

          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="mt-3 border border-gray-300 py-2 px-4 w-full flex items-center justify-between rounded-md hover:bg-gray-200 transition duration-300 group"
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
            className="mt-2 border border-gray-300 py-2 px-4 w-full flex items-center justify-between rounded-md hover:bg-gray-200 transition duration-300 group"
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

          <div className="text-center my-2">or</div>

          <form>
            <div className="flex flex-col gap-1">
              <label className="text-black font-medium">Email Address</label>
              <input
                type="text"
                className="border border-gray-300 py-2 px-4 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <label className="text-black font-medium">Password</label>
              <input
                type="text"
                className="border border-gray-300 py-2 px-4 rounded-md"
              />
            </div>
            <button className="bg-gray-800 hover:bg-black w-full mt-3 p-3 rounded-md text-white transition duration-300">
              Continue
            </button>
          </form>

          <p className="mt-4 text-gray-500">
            No Account ?{" "}
            <Link href="/sign-up" className="text-[#ff5722] hover:underline">
              Sign up
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
