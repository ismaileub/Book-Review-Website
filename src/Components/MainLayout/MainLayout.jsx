import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='container mx-auto px-12'>
                <NavBar></NavBar>
            </div>
            <main className='container mx-auto px-12' >
                <Outlet></Outlet>
            </main>

            <div className=''>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;