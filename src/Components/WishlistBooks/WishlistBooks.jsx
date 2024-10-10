import React, { useEffect, useState, useMemo } from 'react';
import { getBooks } from '../utility/LocalStorage';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import OneBook from '../OneBook/OneBook';

const WishlistBooks = () => {

    const books = useLoaderData();
    const { sortOption } = useOutletContext();


    const idOfReadBooks = useMemo(() => getBooks('whishesbooks'), []);

    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {

        const filtered = books.filter(book => idOfReadBooks.includes(book.bookId));

        const sorted = sortOption
            ? [...filtered].sort((a, b) => {
                if (sortOption === 'rating') return b.rating - a.rating;
                if (sortOption === 'pages') return b.totalPages - a.totalPages;
                if (sortOption === 'year') return b.yearOfPublishing - a.yearOfPublishing;
                return 0;
            })
            : filtered;

        setFilteredBooks(sorted);
    }, [sortOption, books, idOfReadBooks]);

    return (
        <div className='grid grid-cols-1 gap-6'>
            {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                    <OneBook key={book.bookId} id={book.bookId} books={books} />
                ))
            ) : (
                <p className='text-xl'>No Books </p>
            )}
        </div>
    );
};

export default WishlistBooks;
