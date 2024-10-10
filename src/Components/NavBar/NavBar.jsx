// src/Components/NavBar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-10 items-center Work-Sans shadow-[rgba(0,0,0,0.1)_0px_2px_2px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/listedbooks'}>Listed Books</NavLink>
                            <NavLink to={'/pagestoread'}>Pages to Read</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost hover:bg-[#23BE0A] hover:text-white text-[#23BE0A] text-2xl font-bold ">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 items-center font-semibold">
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive
                                    ? 'text-[#23BE0A] border border-[#23BE0A] py-2 px-4 rounded hover:text-white hover:bg-[#23BE0A]'
                                    : 'text-black opacity-60 py-2 px-4 rounded border border-transparent hover:bg-gray-200 hover:border-black'
                                }`
                            }
                            to={'/'}>Home</NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive
                                    ? 'text-[#23BE0A] border border-[#23BE0A] py-2 px-4 rounded hover:text-white hover:bg-[#23BE0A]'
                                    : 'text-black opacity-60 py-2 px-4 rounded border border-transparent hover:bg-gray-200 hover:border-black'
                                }`
                            }
                            to={'/listedbooks'}>Listed Books</NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive
                                    ? 'text-[#23BE0A] border border-[#23BE0A] py-2 px-4 rounded hover:text-white hover:bg-[#23BE0A]'
                                    : 'text-black opacity-60 py-2 px-4 rounded border border-transparent hover:bg-gray-200 hover:border-black'
                                }`
                            }
                            to="/pagestoread">
                            Pages to Read
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-4 ">
                    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
