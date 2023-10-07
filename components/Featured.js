import Link from 'next/link'
import React from 'react'

const Featured = () => {
    return (

        <div className=' min-h-screen flex items-center justify-center'>


            <header className="relative text-center z-10">

                <h1 className="text-5xl font-extrabold text-white">
                    Explore the Universe
                </h1>
                <p className="mt-4 text-2xl text-white">
                    Your Ultimate Space Adventure Planner
                </p>
                <div className="mt-8">
                    <Link href="/destinations" className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                        Start Your Journey

                    </Link>
                </div>
            </header>
        </div>

    )
}

export default Featured