import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getBooks } from '../utility/LocalStorage';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};


const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const books = useLoaderData();
    const idOfReadBooks = getBooks('readsbook');

    const readBooks = books.filter(book => idOfReadBooks.includes(book.bookId));

    return (
        <div className='bg-black bg-opacity-5 p-10 mt-8 flex justify-center items-center rounded-lg'>

            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={readBooks}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />


                    <XAxis
                        dataKey="bookName"
                        tickFormatter={(name) => name.length > 10 ? name.substring(0, 8) + '...' : name}
                    />






                    <YAxis
                        domain={[0, 500]}
                        ticks={[100, 200, 300, 400]}
                        tick={{ fontSize: 12 }}
                    />



                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {readBooks.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;
