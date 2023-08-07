'use client';
import ProductList from "./ProductList"
import token from ''
const BestSelling = () => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="flex items-center gap-6">
                <div className="rounded-[4px] w-[20px] bg-secondary-2 h-[40px]"></div>
                <div className="font-poppins text-secondary-2 font-semibold">This Month</div>
            </div>
            <div className="flex items-center gap-4 md:gap-28 mb-4 py-2">
                <div className="text-xl md:text-4xl font-semibold font-inter">
                    Best Selling Products
                </div>

            </div>
            <div className="w-full overflow-x-scroll justify-center">
                <div className="w-full flex flex-nowrap md:gap-8 gap-2">
                    <ProductList />
                </div>
            </div>

        </div>
    )
}

export default BestSelling