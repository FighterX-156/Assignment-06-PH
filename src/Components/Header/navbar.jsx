import { ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = ({cartCard}) => {
  return (
    <div className="shadow-sm">
      <div className="navbar max-mr ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="text-[36px] font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent hidden sm:block">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="badge badge-primary badge-xs absolute -top-3 -right-2">
                {cartCard.length}
              </div>
              <ShoppingCart />
            </div>

            <p className="text-[#101727] font-semibold btn btn-ghost rounded-full">Login</p>
          </div>
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
