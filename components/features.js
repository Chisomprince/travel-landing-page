import React from "react";

export default function Features() {
  return (
    <div>
      <div className="bg-yellow-100 py-8">
        <div className="w-2/3 mx-auto text-center py-8">
          <span className="font-bold text-4xl ">
            Why consider us for
            <span className="text-pink-500"> Your next travel</span>
          </span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-16 gap-6">
          <div className="bg-white rounded-xl p-4 flex flex-col justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="py-8 w-24 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <h4 className="font-bold text-xl py-4">Tour Plan</h4>
            <p className="text-gray-600">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 flex flex-col justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="py-8 w-24 text-yellow-600"
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
            <h4 className="font-bold text-xl py-4">Tour Plan</h4>
            <p className="text-gray-600">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 flex flex-col justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="py-8 w-24 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h4 className="font-bold text-xl py-4">Tour Plan</h4>
            <p className="text-gray-600">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 flex flex-col justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="py-8 w-24 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h4 className="font-bold text-xl py-4">Tour Plan</h4>
            <p className="text-gray-600">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
