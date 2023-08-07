import Image from "next/image"
export const Product = () => {
    return (
        <div className="flex-none w-full max-w-[180px] lg:max-w-[250px] mb-8">
            <div className="w-full relative">
                <img src="https://source.unsplash.com/random" className="w-full h-[150px]" />
            </div>
            <div className="mt-6 flex flex-col gap-2">
                <div className="font-semibold">Lorem description</div>
                <div className="flex flex-row gap-4"><span className="text-secondary-2">Rp. 120.000</span> <span className="line-through">Rp. 175.000</span></div>
                <div className="flex items-center flex-row gap-2">
                    <div>
                        4.5
                    </div>
                    <div className="w-[20px] flex items-center">
                        <img className="w-full" src="assets/icons/star.png" />
                    </div>
                    <div className="font-light">
                        (90)
                    </div>
                </div>
            </div>
        </div>
    )
}
