import React from "react";

export default function HeaderActions() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 bg-white p-4 shadow-lg">
        <div className=" bg-gray-200 flex justify-start items-center gap-2 p-2 rounded">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </span>
          <div>
            <p className="font-bold">Location</p>
            <p className="text-sm">Lagos,calabar Nigeria</p>
          </div>
        </div>
        <div className=" bg-gray-200 flex justify-start items-center gap-2 p-2 rounded">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          <div className="flex-1">
            <p className="font-bold">Date</p>
            <p className="text-sm">21, Nov 2021</p>
          </div>
        </div>
        <div className="flex-1 bg-gray-200 flex justify-start items-center gap-2 p-2 rounded">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <div>
            <input
              className="h-full border-0 bg-gray-200"
              placeholder="search"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
