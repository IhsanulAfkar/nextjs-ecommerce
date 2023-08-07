import Image from "next/image"
import ads from '@public/assets/ads/1.png'
export const Jumbotron = () => {
    return (
        <div className="pt-28 flex justify-center w-full">
            <div className="w-full flex justify-center">
                <Image
                    src={ads}
                />
            </div>

        </div>
    )
}
