import React from 'react';
import { getBooks } from '../utility/LocalStorage';
import { useLoaderData } from 'react-router-dom';
import OneBook from '../OneBook/OneBook';

const WishlistBooks = () => {
    const idOfReadBooks = getBooks('whishesbooks');

    const books = useLoaderData();


    return (
        <div className='grid grid-cols-1 gap-6'>

            {
                idOfReadBooks.map((id, index) =>
                    <OneBook
                        key={index} id={id} books={books} >

                    </OneBook>
                )
            }

        </div>
    );
};

export default WishlistBooks;