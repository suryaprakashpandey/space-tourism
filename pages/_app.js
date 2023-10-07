import MobileNavbar from '@/components/MobileNavbar';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'

import { motion } from "framer-motion";

export default function App({ Component, pageProps }) {


  return (
    <div className="relative items-center justify-center">

      <video
        autoPlay
        loop
        muted
        playsInline
        onloadstart="this.playbackRate = 0.5;"
        className=" absolute top-0 right-0 left-0 inset-0 w-full h-full object-cover"
      >
        <source src="/source/solar_system_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative p-3 ">
        <Navbar />
        <MobileNavbar />
      </div>

      <Component {...pageProps} />

    </div>
  )

}
