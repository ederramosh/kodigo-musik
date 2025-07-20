import Link from "next/link";

const NavigationBar = () => {

    return(
        <div className="flex flex-col items-center justify-center text-center md:flex-row md:justify-between md:items-center md:text-left px-6 py-20 shadow-md 
            bg-[url('https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975865/image-hero_1_ahypah.jpg')]
            md:bg-[url('https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975380/image-hero_q3wsb1.jpg')]
            bg-cover bg-center bg-no-repeat text-center">
            <div>
                <h1 className="text-4xl font-bold text-white">Kodigo Music</h1>
            </div>
            <div className="flex space-x-6 text-white">
                <div className="group">
                    <Link className="hover:text-white hover:font-bold" href="/">Home</Link>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
                </div>
                <div className="group">
                    <Link className="hover:text-white hover:font-bold" href="/categories">Categories</Link>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
                </div>
                <div className="group">
                    <Link className="hover:text-white hover:font-bold" href="/subscribe">Subscribe</Link>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;