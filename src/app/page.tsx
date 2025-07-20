import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section>
      <div
        className="relative container flex flex-col max-w-6xl mx-auto my-10 px-6 text-gray-900 md:flex-row md:p-0"
      >
        <Image src="https://res.cloudinary.com/dkf7ik9he/image/upload/v1752974937/Screenshot_20250719_172037_ChatGPT_czuuzy.jpg"
          width={600} height={600} alt="goat" />
        <div
          className="top-100 pr-0 md:pr-20 bg-white px-5 md:absolute md:right-0 md:py-20 md:pl-20"
        >
          <h2
            className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left"
          >
            The best music in any streaming plattform!
          </h2>
          <p className="max-w-md text-center md:text-left">
            Founded our service in 2017, Kodigo Music you will find new streaming concerts
            around the globe at any time, any place, and any day.
            We win awards for quality and service about new concept of streaming music, 
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
    <section className="md:top-35 md:relative ">
      <div className="max-w-6xl mx-auto text-center px-10 mb-40 pt-16">
        
        <h3 className="mb-8 text-4xl font-bold text-center">Download for your devices</h3>

        <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
          Kodigo Music allows you to track every song and your device and organize everything .
          Instantly access your serivces on all your devices.
        </p>

        <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
          <Link
            href="#"
            className="p-2 px-8 rounded-full shadow-lg bg-green-500 duration-200 hover:opacity-80"
          >
            Download for Android
          </Link>
          <Link
            href="#"
            className="p-2 px-8 rounded-full shadow-lg bg-blue-500 duration-200 hover:opacity-80"
          >
            Download for iOS
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
