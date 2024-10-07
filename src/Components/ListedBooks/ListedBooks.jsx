import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ListedBooks = () => {




    return (
        <div>
            <div className=' mt-3 mb-6 font-bold rounded-lg p-5 bg-[#1313130D] w-full text-center Work-Sans text-black text-3xl'>Books</div>

            <div className='mx-auto mt-6 mb-10 text-center'>Short by</div>

            <div className='mb-10'>
                <div className="  flex Work-Sans overflow-y-hidden overflow-x-auto items-center -mx-4   flex-nowrap dark:bg-gray-100 dark:text-gray-800">


                    <NavLink to={'/listedbooks/readsbook'} rel="noopener noreferrer" href="#" className={({ isActive }) => `${isActive ? 'border border-b-0  rounded-t' : 'border-b'}    flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 dark:text-gray-600`}>

                        <span>Read Books</span>
                    </NavLink>



                    <NavLink to={'/listedbooks/wisheslist'} rel="noopener noreferrer" href="#"
                        className={({ isActive }) => `${isActive ? 'border border-b-0 rounded-t ' : 'border-b'}    flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 dark:text-gray-600`}
                    >

                        <span>Wishlist Books</span>
                    </NavLink>


                    <div className=' border-b  py-6  flex-grow '></div>

                </div>




            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;