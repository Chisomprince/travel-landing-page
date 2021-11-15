import React from "react";
import Rating from "./rating";

export default function Testimonies() {
  return (
    <div className="bg-yellow-100 p-8">
      <div className="w-2/3 mx-auto text-center py-8">
        <span className="font-bold text-4xl my-4">
          Meet Our Happy
          <span className="text-pink-500"> Clients</span>
        </span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="container flex flex-col mx-auto w-3/4">
        <div className="bg-white rounded-lg flex flex-col justify-center p-4 gap-6 ">
          <div className="flex space-x-4">
            <div>
              <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="object-cover w-12 h-12 rounded-full "
              />
            </div>
            <div>
              <h4 className="font-bold">Justin Mathew</h4>
              <span className="text-xs d">England</span>
            </div>
          </div>
          <div className="-sm">
            <p>
              Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
              dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
              finibus.
            </p>
            <p>
              Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
              mauris cursus venenatis. Maecenas gravida urna vitae accumsan
              feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
            </p>
            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
}
