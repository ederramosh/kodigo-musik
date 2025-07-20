import Image from "next/image";
import { imageType } from "@/types/image.types";

const ImageDetails = (image: imageType) => {

    const { title, desktopImg, mobileImg } = image;

    return (
        <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white hover:text-black uppercase md:flex-row md:space-y-0 md:space-x-8">
            <div className="group relative overflow-hidden hover:text-black ">
                <Image
                    src={desktopImg}
                    alt={title}
                    className="hidden w-full duration-200 md:block group-hover:scale-110 hover:text-black"
                    width={256}
                    height={450}
                />
                <Image
                    src={mobileImg}
                    alt={title}
                    className="w-full md:hidden w-full duration-200 md:block group-hover:scale-110"
                    width={654}
                    height={240}
                />
                <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h5 className="absolute bottom-4 left-4 text-white text-xl uppercase">{title}</h5>
            </div>
        </div>
    )
};

export default ImageDetails;