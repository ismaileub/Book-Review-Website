import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BookDetails = () => {

    const { bookId } = useParams();
    const datas = useLoaderData();

    const intId = parseInt(bookId);

    console.log(datas);
    console.log(intId);

    const book = datas.find(data => data.bookId === intId);




    const { bookName, review, author, category, image, description, rating, totalPages, yearOfPublishing, publisher, tags } = book;

    return (

        <div className="mt-12 mb-5 overflow-hidden ">
            <div className=" flex  gap-10 flex-col lg:flex-row">

                <div className='flex-1 grid items-center rounded-lg p-16 bg-[#1313130D]'>
                    <img className='border rounded-lg '
                        src={image} />
                </div>

                <div className='flex-1 space-y-4'>
                    <h1 className='text-4xl font-bold Playfair-Display text-black'>{bookName}</h1>
                    <p className='font-medium Work-Sans text-xl text-black opacity-75'>By : {author}</p>
                    <hr />
                    <p className="Work-Sans"> {category} </p>
                    <hr />
                    <div className="Work-Sans "><span ><span className='font-bold'>Review </span>: <span className='opacity-70'>{review}</span></span></div>

                    <div className="Work-Sans ">
                        <span className='font-bold'>Tag</span> <Link><span className='text-[#23BE0A] ml-5'>#{tags[0]}</span></Link>
                        <Link><span className='text-[#23BE0A] ml-5'>#{tags[1]}</span></Link>
                    </div>

                    <hr />

                    <div className='flex Work-Sans items-center'>
                        <div className='flex-1 space-y-2'>
                            <h1>Number of Pages:</h1>
                            <h1>Publisher:</h1>
                            <h1>Year of Publishing:</h1>
                            <h1>Rating:</h1>

                        </div>
                        <div className='flex-1 Work-Sans space-y-2'>
                            <h1>{totalPages}</h1>
                            <h1>{publisher}</h1>
                            <h1>{yearOfPublishing}</h1>
                            <h1>{rating}</h1>
                        </div>
                    </div>
                    <div className='Work-Sans flex gap-5'>
                        <Link><button className="px-7 text-black font-semibold py-3 border border-gray-400 rounded-md  hover:bg-[#50B1C9] hover:text-white">Read</button></Link>

                        <Link>
                            <button className="px-7 text-black font-semibold py-3 border border-gray-400 rounded-md  hover:bg-[#50B1C9] hover:text-white">Wishlist</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default BookDetails;
