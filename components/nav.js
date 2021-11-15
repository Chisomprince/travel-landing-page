import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);
  return (
    <div>
      <header className="p-4 bg-yellow-100">
        <div className="container flex justify-between items-center mx-auto">
          <Link href="#">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 text-pink-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-bold text-2xl ">
                Company
                <span className="text-pink-500"> Logo</span>
              </span>
            </div>
          </Link>
          <ul className=" hidden lg:flex gap-16">
            <li
              className={`${(router.pathname = "/"
                ? "font-bold border-b-2 border-pink-400"
                : "gray-900")}`}
            >
              <Link href="#">Home</Link>
            </li>
            <li className="flex">
              <Link href="#">About us</Link>
            </li>
            <li className="flex">
              <Link href="#">Our blog</Link>
            </li>
            <li className="flex">
              <Link href="#">Gallery</Link>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex gap-6">
            <button className="self-center px-6 py-2 rounded-full text-pink-400 border border-pink-400">
              Contact
            </button>
            <button className="self-center px-8 py-2 text-white font-semibold rounded-full bg-pink-400">
              Book a trip
            </button>
          </div>
          <button
            className="p-4 lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`${
            openNav ? "flex flex-col mt-8 gap-4" : "hidden"
          } lg:hidden text-gray-600`}
        >
          <li
            className={`${(router.pathname = "/"
              ? "font-bold border-b-2 border-pink-400"
              : "gray-900")} bg-white rounded-lg py-2 px-4`}
          >
            <Link href="#">Home</Link>
          </li>
          <li className="bg-white rounded-lg py-2 px-4">
            <Link href="#">About us</Link>
          </li>
          <li className="bg-white rounded-lg py-2 px-4">
            <Link href="#">Our blog</Link>
          </li>
          <li className="bg-white rounded-lg py-2 px-4">
            <Link href="#">Gallery</Link>
          </li>
          <li className=" rounded-lg py-2 px-4">
            <Link href="#">contact us</Link>
          </li>
          <li className="bg-pink-400 rounded-lg py-2 px-4 text-white">
            <Link href="#">Book a trip</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
