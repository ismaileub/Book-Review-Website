import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';

const Home = () => {

    const books = useLoaderData();

    const { review, image } = books[0];

    return (
        <div className='mb-5'>
            <div className="hero bg-[#1313130D] rounded-lg p-2 lg:p-24">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={image}
                        className=" max-w-full  lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>

                        <p className="py-6 font-bold Playfair-Display  text-black lg:leading-[60px] text-xl lg:text-4xl">
                            {
                                review.slice(0, 79)
                            }
                        </p>
                        <div className='  text-center lg:text-left btn Work-Sans lg:  text-lg text-white bg-[#23BE0A]'>
                            <Link to={'/listedbooks'} >

                                View The List
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='Playfair-Display font-semibold text-black text-3xl mt-24 mb-10 text-center'>Books</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {books.map((book) => (
                    <Link

                        to={`/${book.bookId}`}
                        key={book.bookId}>

                        <Book data={book} />

                    </Link>
                ))}
            </div>


        </div>
    );
};

export default Home;