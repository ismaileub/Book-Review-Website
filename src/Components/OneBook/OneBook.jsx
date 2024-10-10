import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import page from '../../assets/page.png'
import publisherimg from '../../assets/publisher.png'


const OneBook = ({ id, books }) => {


    const book = books.find(book => book.bookId === id);

    const { bookId, bookName, author, image, totalPages, rating, category, yearOfPublishing, tags, publisher } = book;


    return (
        <div className="  flex flex-col lg:grid lg:grid-cols-5 p-2 lg:p-6 border lg:gap-10 gap-2 rounded-lg Work-Sans">
            <div className="col-span-1 bg-[#131313] bg-opacity-10 rounded-md p-3 flex justify-center items-center">
                <img className="rounded h-40" src={image} alt="" />
            </div>

            <div className="col-span-4 space-y-4">
                <h1 className="font-bold text-2xl">{bookName}</h1>
                <p className="font-medium">By: {author}</p>


                <div className="flex justify-start flex-col lg:flex-row lg:gap-16 items-center  ">

                    <div className="Work-Sans lg:w-fit  w-full flex  ">
                        <span className='font-bold'>Tag</span>
                        <Link><span className='text-[#23BE0A] ml-5'>#{tags[0]}</span></Link>
                        <Link><span className='text-[#23BE0A] ml-5'>#{tags[1]}</span></Link>
                    </div>

                    <div className="flex w-full lg:w-fit  gap-4 items-center">
                        <IoLocationOutline className="text-xl"></IoLocationOutline>
                        <p className="">Year of Publishing:  {yearOfPublishing}</p>
                    </div>


                </div>

                <div className="flex  justify-start flex-col lg:flex-row lg:gap-7 items-center" >

                    <div className="flex gap-2 w-full lg:w-fit items-center">
                        <img src={publisherimg} alt="" />
                        <p> {publisher}</p>
                    </div>

                    <div className="flex gap-2 w-full lg:w-fit items-center">
                        <img src={page} alt="" />
                        <p>Page: {totalPages}</p>
                    </div>

                </div>

                <hr />

                <div className="flex items-center gap-5">

                    <div className="bg-[#328EFF] text-[#328EFF] bg-opacity-20 text-center lg:py-2 lg:px-4 rounded-full">Category: {category}</div>

                    <div className="bg-[#FFAC33] text-[#FFAC33] bg-opacity-20 text-center lg:py-2 lg:px-4 rounded-full">Rating: {rating}</div>

                    <div>
                        <Link to={`/${bookId}`} className="text-white bg-[#23BE0A] lg:py-2 lg:px-4 rounded-full text-center " >

                            View Details

                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OneBook;