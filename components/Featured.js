import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

const Featured = () => {
    return (

        <div className=' min-h-screen flex items-center justify-center'>

            <div className={"relative items-center justify-center w-full  "}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onloadstart="this.playbackRate = 0.5;"
                    className=" absolute top-0 right-0 left-0 inset-0 w-full h-full object-cover "
                >
                    <source src="/source/solar_system_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="relative p-3 ">
                    <Navbar />
                    <MobileNavbar />
                </div>

                <header className="relative flex text-center content-center items-center justify-center min-h-screen z-10">
                    <div className="container mx-auto">
                        <h1 className="text-5xl font-extrabold text-white">
                            Explore the Space
                        </h1>
                        <p className="mt-4 text-2xl text-white">
                            Your Ultimate Space Adventure Planner
                        </p>
                        <div className="mt-8">
                            <Link href="/destinations" className=" border  bg-gradient-to-r from-blue-900 to-slate-900  hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                                Book Your Journey
                                {/* Start Your Journey */}

                            </Link>
                        </div>
                    </div>
                </header>

            </div>
        </div >


    )
}

export default Featured