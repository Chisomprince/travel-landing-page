import React from "react";

export default function CallToAction() {
  return (
    <div>
      <div className="bg p-8 flex justify-end">
        <div
          className="p-8 lg:p-16 lg:w-2/4 rounded-lg "
          style={{ backgroundColor: "#ffffff10", backdropFilter: "blur(12px)" }}
        >
          <div className="">
            <span className="font-bold text-2xl ">
              Travel around the world
              <span className="text-pink-500"> at ease and confortably</span>
            </span>
            <p className="py-4">
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
            <button className="px-8 py-2  mt-2 text-lg text-white font-semibold rounded-full bg-pink-500">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
