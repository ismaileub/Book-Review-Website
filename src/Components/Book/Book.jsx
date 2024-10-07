import React from 'react';
import { Link } from 'react-router-dom';
import ratingicon from '../../assets/rating.png';
import { useState } from 'react';

const Book = ({ data }) => {
    const [isRated, setIsRated] = useState(false);
    const { bookName, rating, tags, category, image, author, bookId } = data;

    const handleRatingClick = () => {
        setIsRated(true);
    };

    return (
        <Link to={`/${bookId}`}>
            <div className="flex flex-col card card-compact p-6 border rounded-lg shadow-xl space-y-4">
                <figure>
                    <img className='w-[300px] h-[250px]' src={image} alt={bookName} />
                </figure>
                <div className="space-y-4">
                    <div className='flex Work-Sans font-medium gap-4 text-[#23BE0A]'>
                        <Link ><p>#{tags[0]}</p></Link>
                        <Link ><p>#{tags[1]}</p></Link>
                    </div>
                    <p className='font-bold Playfair-Display text-2xl'>{bookName}</p>
                    <p className='opacity-70 Work-Sans font-medium'>By: {author}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div>{category}</div>
                    <div className='flex gap-2 font-medium Work-Sans'>
                        <div>{rating}</div>
                        <img src={ratingicon} alt="" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
