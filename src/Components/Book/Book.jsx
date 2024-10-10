import React from 'react';
import { Link } from 'react-router-dom';
import ratingicon from '../../assets/rating.png';


const Book = ({ data }) => {

    const { bookName, rating, tags, category, image, author, bookId } = data;



    return (
        <div>

            <div className="flex flex-col card card-compact p-6 border rounded-lg shadow-xl space-y-4">
                <figure>
                    <img className='w-[300px] rounded-md h-[250px]' src={image} alt={bookName} />
                </figure>

                <div className="space-y-4">

                    <div className='flex Work-Sans font-medium gap-4 text-[#23BE0A]'>
                        <p >#{tags[0]}</p>
                        <p >#{tags[1]}</p>
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
        </div>
    );
};

export default Book;
