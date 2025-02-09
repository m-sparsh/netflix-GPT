import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-12 mx-2 w-15 text-xl rounded-lg hover:bg-opacity-80">
          <div className="flex flex-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 19"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clip-rule="evenodd"
              />
            </svg>
            Play
          </div>
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 w-15 text-xl bg-opacity-40 rounded-lg hover:bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
