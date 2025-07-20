import Link from "next/link";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const FooterBar = () => {
    return (
        <footer id="footer" className="bg-black">
      <div className="container max-w-6xl px-10 py-10 mx-auto md:mt-70">
        <div
          className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start"
        >
          <div
            className="flex flex-col items-center space-y-8 md:items-start md:space-y-4"
          >
            <div
              className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3"
            >
              <div className="h-10 group">
                <Link href="/">Home</Link>
                <div
                  className="group-hover:border-b group:hover:border-blue-50"
                ></div>
              </div>
              <div className="h-10 group">
                <Link href="/categories">Categories</Link>
                <div
                  className="group-hover:border-b group:hover:border-blue-50"
                ></div>
              </div>
              <div className="h-10 group">
                <Link href="/subscribe">Subscribe</Link>
                <div
                  className="group-hover:border-b group:hover:border-blue-50"
                ></div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col items-start justify-between space-y-4 text-white"
          >
            <div
              className="flex items-center justify-center text-2xl mx-auto space-x-4 md:justify-end md:mx-0"
            >
              <div className="h-8 group">
                <Link href="#">
                <BiLogoFacebookCircle />
                </Link>
              </div>
              <div className="h-8 group">
                <Link href="#">
                <FaTwitter />
                </Link>
              </div>
              <div className="h-8 group">
                <Link href="#">
                <FaSquareInstagram />
                </Link>
              </div>
              <div className="h-8 group">
                <Link href="#">
                <AiFillTikTok />
                </Link>
              </div>
            </div>

            <div className="font-bold text-gray-500">
                2017 Kodigo Music. All Rights Reserved.
            </div>

          </div>
        </div>
      </div>
    </footer>
    )
}

export default FooterBar;