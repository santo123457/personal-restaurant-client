import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn normal-case btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <button className="btn normal-case btn-ghost">
                <Link className=" text-lg" to="/">
                  Home
                </Link>
              </button>
              <button className="btn normal-case btn-ghost">
                <Link className=" text-lg" to="/blogs">
                  Blogs
                </Link>
              </button>
              <li tabIndex={0}>
                <button className="font-semibold text-lg ps-11 btn normal-case btn-ghost">
                  Pages
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </button>
                <ul className="p-2 z-10 text-white bg-gray-800">
                  <li>
                    <Link to="/">Menu 1</Link>
                  </li>
                  <li>
                    <Link to="/">Menu 2 </Link>
                  </li>
                  <li>
                    <Link to="/">Menu 3</Link>
                  </li>
                  <li>
                    <Link to="/">Menu 4</Link>
                  </li>
                </ul>
              </li>

              <li tabIndex={0}>
                <button className="font-semibold text-lg ps-11 btn normal-case btn-ghost">
                  Pages
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </button>
                <ul className="p-2 z-10 text-white bg-gray-800">
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/review">Review Now </Link>
                  </li>
                  <li>
                    <Link to="/book-now">Book Now </Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </li>
              <button className="btn normal-case btn-ghost">
                <Link to="/login" className=" text-lg">
                  Log In
                </Link>
              </button>
            </div>
          </div>
          <span className="px-10 lg:hidden block mx-auto">
            <a className="text-2xl  text-purple-900 font-mono ">
              Personal Restaurant
            </a>
          </span>
        </div>
        <div className="navbar-center mt-5 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <button className="btn normal-case btn-ghost">
              <Link className=" me-5 text-lg" to="/">
                Home
              </Link>
            </button>
            <button className="btn normal-case btn-ghost">
              <Link className=" text-lg" to="/blogs">
                Blogs
              </Link>
            </button>
            <li tabIndex={0}>
              <a className="font-semibold text-lg me-2">
                Menu
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 z-10 text-white bg-gray-800">
                <li>
                  <Link to="/">Menu 1</Link>
                </li>
                <li>
                  <Link to="/">Menu 2 </Link>
                </li>
                <li>
                  <Link to="/">Menu 3</Link>
                </li>
                <li>
                  <Link to="/">Menu 4</Link>
                </li>
              </ul>
            </li>
            <button className="px-10 ">
              <Link to="/" className="text-3xl text-purple-900 font-mono ">
                Personal Restaurant
              </Link>
            </button>

            <li tabIndex={0}>
              <a className="font-semibold text-lg me-2">
                Pages
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 z-10 text-white bg-gray-800">
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/review">Review Now </Link>
                </li>
                <li>
                  <Link to="/book-now">Book Now </Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </li>

            <button className="btn normal-case btn-ghost">
              <Link to="/login" className=" text-lg">
                LogIn
              </Link>
            </button>
            <button className="btn normal-case btn-ghost">
              <Link to="/register" className=" text-lg">
                Register
              </Link>
            </button>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn normal-case btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn normal-case btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end mx-5">
              <label
                tabIndex={0}
                className="btn normal-case btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
