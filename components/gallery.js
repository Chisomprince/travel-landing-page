import React from "react";

export default function Gallery() {
  return (
    <div className="mb-32 bg-gradient-to-b from-yellow-100 to-white">
      <div className="lg:grid lg:grid-cols-3 gap-6 space-y-8  lg:h-screen px-4 lg:px-16">
        <div className="lg:col-span-3 flex  items-center">
          <span className="font-bold text-4xl ">
            Our
            <span className="text-pink-500"> Gallery</span>
          </span>
        </div>
        <div className="">
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1529109328884-6818f3c0f109?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
              alt=""
              className="object-cover h-full "
            />
          </div>
          <div>
            <p className="font-bold">Where does it come from?</p>
            <p className="text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
          </div>
        </div>
        <div className="">
          <div>
            <p className="font-bold">Where does it come from?</p>
            <p className="text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
          </div>
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="object-cover h-full "
            />
          </div>
        </div>
        <div className="">
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="object-cover h-full "
            />
          </div>
          <div>
            <p className="font-bold">Where does it come from?</p>
            <p className="text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
