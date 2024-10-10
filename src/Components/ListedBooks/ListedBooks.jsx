import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ListedBooks = () => {
    const [sortOption, setSortOption] = useState('');



    const handleSortChange = (option) => {
        setSortOption(option);
    };

    return (
        <div>
            <div className='mt-3 mb-6 font-bold rounded-lg py-5 bg-[#1313130D] w-full text-center Work-Sans text-black text-3xl'>Books</div>

            <div className='mx-auto mt-6 mb-10 text-center'>
                <details className="dropdown">
                    <summary className="btn text-white bg-[#23BE0A] m-1">Sort By</summary>
                    <ul className="menu dropdown-content text-center bg-base-100 rounded-box z-[1] w-52 p-2 shadow relative">
                        <li><button onClick={() => handleSortChange('rating')}>Rating</button></li>
                        <li><button onClick={() => handleSortChange('pages')}>Number of pages</button></li>
                        <li><button onClick={() => handleSortChange('year')}>Publisher year</button></li>
                    </ul>
                </details>
            </div>

            <div className='mb-10'>
                <div className="flex Work-Sans overflow-y-hidden overflow-x-auto items-center -mx-4 flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <NavLink to={'/listedbooks/readsbook'} className={({ isActive }) => `${isActive ? 'border border-b-0 rounded-t' : 'border-b'} flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-600`}>
                        <span>Read Books</span>
                    </NavLink>
                    <NavLink to={'/listedbooks/wishlistbooks'} className={({ isActive }) => `${isActive ? 'border border-b-0 rounded-t' : 'border-b'} flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-600`}>
                        <span>Wishlist Books</span>
                    </NavLink>
                    <div className='border-b py-6 flex-grow'></div>
                </div>
            </div>

            <div>

                <Outlet context={{ sortOption }} />
            </div>
        </div>
    );
};

export default ListedBooks;
