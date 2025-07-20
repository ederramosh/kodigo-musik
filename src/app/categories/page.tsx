import ImageDetails from "../components/ImageDetails/ImageDetails";
import { imageType } from "@/types/image.types";

const images:imageType[] = [
    {
      title: "Relaxing Music",
      desktopImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975380/image-deep-earth_hbjb7q.jpg",
      mobileImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975866/image-deep-earth_1_vbl0l2.jpg",
    },
    {
      title: "Tech",
      desktopImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975381/image-curiosity_r7tb1t.jpg",
      mobileImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975867/image-curiosity_1_bng1zs.jpg",
    },
    {
      title: "Racing Music",
      desktopImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975377/image-grid_uav70e.jpg",
      mobileImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975862/image-grid_1_wzlbuc.jpg",
    },
    {
      title: "Travel Music",
      desktopImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975377/image-from-above_gtbjdm.jpg",
      mobileImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975865/image-from-above_1_ngyzfj.jpg",
    },
    {
      title: "Astral Music",
      desktopImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975376/image-pocket-borealis_m6s9nx.jpg",
      mobileImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975861/image-pocket-borealis_1_m5uxmv.jpg",
    },
    {
      title: "Gambling Music",
      desktopImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975376/image-night-arcade_cua97m.jpg",
      mobileImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975861/image-night-arcade_1_xr2rnz.jpg",
    },
    {
      title: "Travel to the beach",
      desktopImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975380/image-fisheye_ijkgqi.jpg",
      mobileImg: "https://res.cloudinary.com/dkf7ik9he/image/upload/v1752975866/image-fisheye_1_rmvvb1.jpg",
    },
  ];

const Categories = () => {


    return (
        <section className="mt-32">
            <div className="container max-w-6xl mx-auto px-6 text-gray-900 md:px-0">
                <div className="flex justify-center mb-20 md:justify-between">
                    <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
                        Our New Genders
                    </h2>
                    <button className="hidden px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black font-alata hover:bg-black hover:text-white md:block">See All</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {images.map((item, index) => (
                        <ImageDetails key={index} {...item} />
                    ))}
                </div>

                <div className="flex justify-center mt-10 mb-10 md:hidden">
                    <button className="px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black font-alata hover:bg-black hover:text-white w-full">See All</button>
                </div>
            </div>
        </section>
    )
}

export default Categories;