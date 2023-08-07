import BestSelling from "@components/BestSelling"
import BrowseCategories from "@components/BrowseCategories"
import { Flashsales } from "@components/Flashsales"
import { Header } from "@components/Header"

export const metadata = {
    title: 'Exclusive | Home',
    description: '...',
}

const Home = () => {
    return (
        <div className="w-full">
            <Header />
            <div className="mt-36"></div>
            <Flashsales />
            <div className="border-t my-24"> </div>
            <BrowseCategories />
            <div className="border-t my-24"> </div>
            <BestSelling />

            <div className="w-full flex justify-evenly gap-4 my-44">
                <div className="flex flex-col justify-center text-center gap-2 ">
                    <div className="flex-none mb-8">
                        <img src="assets/icons/Services.png" className="mx-auto" />
                    </div>
                    <p className="font-bold uppercase">Free and Fast Delivery</p>
                    <p className="text-[16px]">Free delivery for all orders above Rp. _</p>
                </div>
                <div className="flex flex-col justify-center text-center gap-2">
                    <div className="flex-none mb-8">
                        <img src="assets/icons/headset.png" className="mx-auto" />
                    </div>
                    <p className="font-bold uppercase">Free and Fast Delivery</p>
                    <p className="text-[16px]">Free delivery for all orders above Rp. _</p>
                </div>
                <div className="flex flex-col justify-center text-center gap-2">
                    <div className="flex-none mb-8">
                        <img src="assets/icons/shield.png" className="mx-auto" />
                    </div>
                    <p className="font-bold uppercase">Free and Fast Delivery</p>
                    <p className="text-[16px]">Free delivery for all orders above Rp. _</p>
                </div>
            </div>
        </div>
    )
}

export default Home
