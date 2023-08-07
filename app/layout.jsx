'use client';
import Footer from '@components/Footer'
import Login from '@components/Login'
import { Nav } from '@components/Nav'
import '@styles/global.css'
import { useState } from 'react'
export const metadata = {
    title: 'Ecommerce',
    description: 'Buy every things u need'
}
const RootLayout = ({ children }) => {
    const [showLogin, setShowLogin] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    return (
        <html lang="en">
            <head>
            </head>
            <body className='overflow-x-hidden'>
                <Nav setShowLogin={setShowLogin} />
                {showLogin ? <Login setShowLogin={setShowLogin} /> : null}
                <main className="w-full flex justify-center items-center container mx-auto font-poppins lg:text-xl px-2">
                    {children}
                </main>
                {/* <div className='mb-[1000px]'>asdasd</div> */}
                <div className='hidden md:block fixed bottom-16 right-16 bg-[#F5F5F5] z-[5] rounded-full p-2 outline outline-black hover:cursor-pointer' onClick={scrollToTop}>
                    <img src="assets/icons/arrow up.png" alt="" />
                </div>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout