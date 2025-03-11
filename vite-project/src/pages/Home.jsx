import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="relative text-center p-10 min-h-screen flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 bg-black opacity-100"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(30%)",
          }}
        ></div>

        <h2 className="relative text-4xl font-bold text-white">
          Connecting People Across Faiths & Interests
        </h2>
        <p className="relative mt-4 text-white text-xl">
          Connecting people of all faiths through events and community support.
        </p>
        <Link
          to="/events"
          className="relative mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded"
        >
          Explore Events
        </Link>
      </div>
    </>
  );
};

export default Home;
