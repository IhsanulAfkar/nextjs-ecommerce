'use client';
import { useEffect, useState } from "react";
export const Categories = () => {
    const [listCategories, setListCategories] = useState([]);
    useEffect(() => {
        setListCategories([
            "Woman's Fashion",
            "Men's Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
        ])
    }, []);
    return (
        <div className="text-center md:text-left md:pt-28 flex flex-col gap-2">
            {listCategories.map((p) => {
                return <span className="hover:cursor-pointer">{p}</span>
            })}
        </div>

    )
}
