import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';

const Home = () => {

    const datas = useLoaderData();

    const { review, image } = datas[0];
    return (
        <div className='mb-5'>
            <div className="hero bg-[#1313130D] rounded-lg p-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>

                        <p className="py-6 font-bold Playfair-Display  text-black leading-[60px] text-4xl">
                            {
                                review.slice(0, 79)
                            }
                        </p>
                        <Link to={'/listedbooks'} ><button className="btn Work-Sans text-lg text-white bg-[#23BE0A]">View The List </button></Link>
                    </div>
                </div>
            </div>

            <h1 className='Playfair-Display font-semibold text-black text-3xl mt-24 mb-10 text-center'>Books</h1>

            <div>
                {
                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                        {datas.map((data) => (
                            <Book key={data.bookId} data={data}>

                            </Book>
                        ))}
                    </div>
                }
            </div>


        </div>
    );
};

export default Home;