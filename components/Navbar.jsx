"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const capitalizeWords = (inputString) => {
  if (!inputString) return "";
  const word = inputString.split(" ");

  // Check if there are more than two words
  if (word.length > 2) {
    // If more than two words, trim the array to the first two words
    word.length = 2;
  }

  const capitalizeWord = word.map((word) => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word;
    }
  });
  const logoName = capitalizeWord.join(" ");

  return logoName;
};

const Navbar = () => {
  const { status, data: session } = useSession();

  const inputString = session?.user?.name;
  const capitalizedString = capitalizeWords(inputString);

  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between py-3 ">
        <Link href="/" className="flex items-center justify-center gap-3">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">
            {status === "authenticated" ? capitalizedString : "Suhail"}
          </p>
        </Link>
        <ul className="flex items-center justify-center gap-5 max-md:hidden">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <div className="right">
          {status === "authenticated" ? (
            <>
              <div className="relative">
                <div className="border-[3px] border-transparent rounded-full p-[2px] hover:border-gray-600  transition duration-200">
                  <Image
                    src={session?.user?.image}
                    alt="logo"
                    width={50}
                    height={50}
                    className="object-contain cursor-pointer rounded-full"
                    onClick={() => setToggle(!toggle)}
                  />
                </div>

                {toggle && (
                  <div className="dropdown">
                    <Link
                      href="/profile"
                      className="dropdown_link"
                      onClick={() => setToggle(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/create-prompt"
                      className="dropdown_link"
                      onClick={() => setToggle(false)}
                    >
                      Services
                    </Link>
                    <Link
                      href="/create-prompt"
                      className="dropdown_link"
                      onClick={() => setToggle(false)}
                    >
                      Work
                    </Link>
                    <Link
                      href="/create-prompt"
                      className="dropdown_link"
                      onClick={() => setToggle(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/create-prompt"
                      className="dropdown_link"
                      onClick={() => setToggle(false)}
                    >
                      Contact
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        signOut({ callbackUrl: "/sign-in" });
                        setToggle(false);
                      }}
                      className="mt-5 w-full black_btn"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push("/sign-in")}
                type="button"
                className="black_btn"
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
