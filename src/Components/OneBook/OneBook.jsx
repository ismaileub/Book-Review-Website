import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import page from '../../assets/page.png'
import publisherimg from '../../assets/publisher.png'


const OneBook = ({ id, books }) => {


    const book = books.find(book => book.bookId === id);

    const { bookId, bookName, author, image, totalPages, rating, category, yearOfPublishing, tags, publisher } = book;


    return (
        <div className="grid grid-cols-5 p-6 border gap-10 rounded-lg Work-Sans">
            <div className="col-span-1 bg-[#131313] bg-opacity-10 rounded-md p-3 flex justify-center items-center">
                <img className="rounded h-40" src={image} alt="" />
            </div>

            <div className="col-span-4 space-y-4">
                <h1 className="font-bold text-2xl">{bookName}</h1>
                <p className="font-medium">By: {author}</p>
                <div className="flex gap-16 items-center">
                    <div className="Work-Sans ">
                        <span className='font-bold'>Tag</span> <Link><span className='text-[#23BE0A] ml-5'>#{tags[0]}</span></Link>
                        <Link><span className='text-[#23BE0A] ml-5'>#{tags[1]}</span></Link>
                    </div>

                    <div className="flex gap-4 items-center">
                        <IoLocationOutline className="text-xl"></IoLocationOutline>
                        <p className="">Year of Publishing:  {yearOfPublishing}</p>
                    </div>
                </div>

                <div className="flex gap-7 items-center" >
                    <div className="flex gap-2 items-center">
                        <img src={publisherimg} alt="" />
                        <p> {publisher}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={page} alt="" />
                        <p>Page: {totalPages}</p>
                    </div>
                </div>

                <hr />

                <div className="flex items-center gap-5">
                    <div className="bg-[#328EFF] text-[#328EFF] bg-opacity-20 py-2 px-4 rounded-full">Category: {category}</div>
                    <div className="bg-[#FFAC33] text-[#FFAC33] bg-opacity-20 py-2 px-4 rounded-full">Rating: {rating}</div>

                    <div>
                        <Link to={`/${bookId}`} > <button className="text-white bg-[#23BE0A] py-2 px-4 rounded-full">View Details</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OneBook;