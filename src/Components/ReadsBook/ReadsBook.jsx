import React, { useState, useEffect, useMemo } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import { getBooks } from '../utility/LocalStorage';
import OneBook from '../OneBook/OneBook';

const ReadsBook = () => {
    const books = useLoaderData();
    const { sortOption } = useOutletContext();


    const idOfReadBooks = useMemo(() => getBooks('readsbook'), []);

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
        <div className='grid lg:grid-cols-1 gap-2 lg:gap-6 overflow-hidden'>
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

export default ReadsBook;
