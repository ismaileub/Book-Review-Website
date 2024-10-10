import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);

    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);

    const toggleDropdown1 = () => {
        setDropdownOpen1(!dropdownOpen1);
    };

    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
                setDropdownOpen1(false);
            }
            if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
                setDropdownOpen2(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className="navbar bg-base-100 mt-4 lg:mt-10 items-center Work-Sans shadow-[rgba(0,0,0,0.1)_0px_2px_2px]">

                <div className="navbar-start">
                    <div className="dropdown flex lg:hidden" ref={dropdown1Ref}>
                        <div className="relative">
                            <div onClick={toggleDropdown1} className="cursor-pointer btn btn-ghost">
                                <FaBars size={24} />
                            </div>

                            {dropdownOpen1 && (
                                <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                                    <ul className="text-center">
                                        <NavLink to={'/'} className="block py-2 border-b hover:bg-gray-100">
                                            Home
                                        </NavLink>

                                        <NavLink to={'/listedbooks/readsbook'} className="block py-2 border-b hover:bg-gray-100">
                                            Listed Books
                                        </NavLink>

                                        <NavLink to={'/pagestoread'} className="block py-2 hover:bg-gray-100">
                                            Pages to Read
                                        </NavLink>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <NavLink to="/" className="btn btn-ghost hover:bg-[#23BE0A] hover:text-white text-[#23BE0A] text-2xl font-bold">Book Vibe</NavLink>
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
                            to={`/listedbooks/readsbook`}>Listed Books
                        </NavLink>



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

                <div className="navbar-end">
                    <div className='gap-4 hidden lg:flex'>
                        <NavLink to="/signin" className="btn bg-[#23BE0A] text-white">
                            Sign In
                        </NavLink>
                        <NavLink to="/signup" className="btn bg-[#59C6D2] text-white">
                            Sign Up
                        </NavLink>
                    </div>

                    <div className='flex lg:hidden' ref={dropdown2Ref}>
                        <div className="relative">
                            <div onClick={toggleDropdown2} className="cursor-pointer btn btn-ghost">
                                <FaRegUserCircle size={24} />
                            </div>

                            {dropdownOpen2 && (
                                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                                    <ul className="text-center">
                                        <li className="py-2 border-b hover:bg-gray-100">
                                            <NavLink to="/signin" className="block">Sign In</NavLink>
                                        </li>
                                        <li className="py-2 hover:bg-gray-100">
                                            <NavLink to="/signup" className="block">Sign Up</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;
