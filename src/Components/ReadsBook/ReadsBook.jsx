import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getBooks } from '../utility/LocalStorage';
import OneBook from '../OneBook/OneBook';

const ReadsBook = () => {


    const idOfReadBooks = getBooks('readsbook');

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

export default ReadsBook;