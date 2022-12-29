import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-base-100 navbar">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl" href="/">
          Music
        </Link>
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle text-xl">
          <BsTwitter />
        </button>
        <button className="btn btn-ghost btn-circle text-xl">
          <BsInstagram />
        </button>
        <button className="btn btn-ghost btn-circle text-xl">
          <BsFacebook />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
