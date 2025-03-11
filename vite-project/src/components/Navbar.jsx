import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold">CommunionHub</h1>
      <div>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/events">Events</Link>
      </div>
    </nav>
  );
};

export default Navbar;
