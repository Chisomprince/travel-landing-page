import React from "react";
import HeaderActions from "./headerActions";

export default function Header() {
  return (
    <div>
      <section className="">
        <div className="lg:grid grid-cols-2 sm:py-6 lg:py-4 lg:flex-row lg:justify-between bg-yellow-100">
          <div className="flex flex-col justify-center px-4 lg:px-16">
            <span className="text-4xl font-bold leading-none sm:text-6xl">
              Unmatched expert for awesome travel{" "}
              <p className="text-pink-500">experience</p>
            </span>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button className="px-8 py-3 text-lg text-white font-semibold rounded-full bg-pink-500">
                Learn more
              </button>
              <button className="py-3 text-lg font-semibold flex justify-center items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                watch a video
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="object-contain "
            />
          </div>
          <div className="lg:flex justify-center w-full col-span-2 mt-6 mx-auto">
            <HeaderActions />
          </div>
        </div>
      </section>
    </div>
  );
}
