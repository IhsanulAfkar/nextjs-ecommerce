'use client';
import { useEffect, useState } from "react"
import ProductList from "./ProductList";
import Clock from "./Clock";
export const Flashsales = () => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="flex items-center gap-6">
                <div className="rounded-[4px] w-[20px] bg-secondary-2 h-[40px]"></div>
                <div className="font-poppins text-secondary-2 font-semibold">Today's</div>
            </div>
            <div className="flex items-center gap-4 md:gap-28 mb-4">
                <div className="text-xl md:text-4xl font-semibold font-inter">
                    Flash Sales
                </div>
                <Clock />
            </div>
            <div className="w-full overflow-x-scroll justify-center">
                <div className="w-full flex flex-nowrap md:gap-8 gap-2">
                    <ProductList />
                </div>
            </div>
            <div className="flex justify-center mt-12">
                <div className="bg-secondary-2 py-4 text-white px-8 rounded-xl hover:cursor-pointer">
                    View All Products
                </div>
            </div>
        </div>
    )
}
