'use client';
import { useState, useEffect } from "react"
import CategoryCard from "./CategoryCard";

const BrowseCategories = () => {
    const [categories, setcategories] = useState([]);
    useEffect(() => {
        setcategories([
            {
                img: 'assets/icons/Category-Gamepad.png',
                text: 'Gaming'
            },
            {
                img: 'assets/icons/Category-Headphone.png',
                text: 'Head Phones'
            },
            {
                img: 'assets/icons/Category-Camera.png',
                text: 'Camera'
            },
            {
                img: 'assets/icons/Category-SmartWatch.png',
                text: 'Smart Watch'
            },
            {
                img: 'assets/icons/Category-Computer.png',
                text: 'Computers'
            },
            {
                img: 'assets/icons/Category-CellPhone.png',
                text: 'Smart Phones'
            }
        ])
    }, [])
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="flex items-center gap-6">
                <div className="rounded-[4px] w-[20px] bg-secondary-2 h-[40px]"></div>
                <div className="font-poppins text-secondary-2 font-semibold">Categories</div>
            </div>
            <div className="flex items-center gap-4 md:gap-28 mb-4 py-2">
                <div className="text-xl md:text-4xl font-semibold font-inter">
                    Browse By Categories
                </div>

            </div>
            <div className="w-full flex justify-between flex-wrap ">
                {categories.map(data => (<CategoryCard data={data} />))}
            </div>

        </div>
    )
}

export default BrowseCategories