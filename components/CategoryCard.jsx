'use client';
import { useState } from "react";
const CategoryCard = ({ data }) => {
    const [isHover, setIsHover] = useState(true);
    return (
        <div className="border-2 flex-none w-full max-w-[180px] lg:max-w-[230px] mb-8 py-8 flex flex-col justify-center gap-4 bg-white hover:bg-secondary-2 hover:text-white hover:cursor-pointer">
            <div className={`flex justify-center`}>

                <img src={data.img} />
            </div>
            <div className="text-center">
                {data.text}
            </div>
        </div>
    )
}

export default CategoryCard