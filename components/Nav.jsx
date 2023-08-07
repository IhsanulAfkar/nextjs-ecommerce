'use client';
import { useState } from "react";
import Link from "next/link";
export const Nav = ({ setShowLogin }) => {
    const [search, setSearch] = useState('');
    const [toggle, setToggle] = useState(false)
    const [dropdown, setdropdown] = useState(false);
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            alert(search)
        }
    }

    const handleImgClick = () => {
        document.getElementById('search').focus()
    }
    return (
        <nav className="fixed top-0 z-10 w-full py-3 border-b-2 pt-4 bg-white ">
            {/* Desktop Nav */}
            <div className="hidden md:flex justify-between items-center container mx-auto w-full px-2 lg:w-[85%]">
                <Link href="/" className="font-inter font-bold text-xl basis-[20%] hover:cursor-pointer">
                    <div className="">E Commerce</div>
                </Link>
                <div className="basis-[40%] flex justify-evenly ">
                    <div className="hover:cursor-pointer">Home</div>
                    <div className="hover:cursor-pointer">Contact</div>
                    <div className="hover:cursor-pointer">About</div>
                    <div className="hover:cursor-pointer" onClick={() => setShowLogin(true)}>Sign Up</div>
                </div>
                <div className="basis-[40%] flex justify-end items-center gap-8 ">
                    <div className="bg-[#F5F5F5] w-[250px] flex justify-between items-center p-2 rounded-md gap-2">
                        <div className="basis-4/5 text-sm">
                            <label>
                                <input type='text' placeholder="What are you looking for?"
                                    id="search" className="bg-transparent focus:outline-0" value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    onKeyDown={handleEnter} />
                            </label>
                        </div>
                        <div className="basis-1/5 flex items-center justify-center">
                            <img src="assets/icons/search.png" className="hover:cursor-pointer flex-none" onClick={handleImgClick} />
                        </div>
                    </div>
                    <div className="flex-none">
                        <img src="assets/icons/wishlist.png" className="hover:cursor-pointer" />
                    </div>
                    <div className="flex-none">
                        <img src="assets/icons/cart.png" className="hover:cursor-pointer" />
                    </div>
                    <div className="flex-none relative">
                        <img src="assets/icons/user-default.png" alt="" className="hover:cursor-pointer w-[35px]" onClick={() => setdropdown(!dropdown)} />
                        {dropdown ? <div className="absolute flex flex-col gap-2 p-4 right-0 top-12 bg-white shadow-lg rounded-lg  bg-clip-padding bg-opacity-60 border border-gray-200 whitespace-nowrap" style={{
                            backdropFilter: 'blur(20px)'
                        }}>
                            <a href="#" className="">
                                <p>Manage my Account</p>
                            </a>
                            <a href="#" className="">
                                <p>My Order</p>
                            </a>
                            <a href="#" className="">
                                <p>My Reviews</p>
                            </a>
                            <a href="#" className="">
                                <p>Logout</p>
                            </a>
                        </div> : null}

                    </div>
                </div>
            </div>
            {/* Mobile Nav */}
            <div className="md:hidden flex justify-between px-2 relative">
                <Link href="/" className="font-inter font-bold text-xl hover:cursor-pointer">
                    <div className="">E Commerce</div>
                </Link>
                <div className="flex" onClick={() => setToggle(!toggle)}>
                    <img src='assets/icons/menu.png' width={35} />
                </div>
                {toggle ? (<div className="absolute mt-3 right-0 top-full flex flex-col gap-2 p-4 min-w-[210px] bg-white rounded-md items-end justify-end border drop-shadow-2xl">
                    <div>Home</div>
                    <div>Contact</div>
                    <div>About</div>
                    <div>Sign Up</div>
                    <div className="w-full border-y my-2"></div>
                    <div>Manage My Account</div>
                    <div>My Order</div>
                    <div>My Reviews</div>
                    <div>Logout</div>
                </div>) : <></>}
            </div>
        </nav>
    )
}
