import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className='sticky top-0 z-50'>
                <Navbar />
            </header>

            <main className='flex-grow'>
                <Outlet />
            </main>
            
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;