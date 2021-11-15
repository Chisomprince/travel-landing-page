import React from "react";

export default function About() {
  return (
    <div>
      <section className="">
        <div className="lg:grid grid-cols-2 px-4 lg:px-16 py-24 lg:flex-row lg:justify-between ">
          <div className="flex w-full">
            <img
              src="https://images.unsplash.com/photo-1496046596374-a16aa8b8ae63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1473&q=80"
              alt=""
              className="object-contain "
            />
          </div>
          <div className="flex flex-col justify-center px-4 lg:px-16">
            <h1 className="text-xl py-4 font-semibold leading-none sm:text-4xl">
              About us
            </h1>
            <span className="text-3xl font-bold leading-none sm:text-4xl">
              We are the best travel
              <p className="text-pink-500">Agency</p>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
