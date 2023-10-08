// pages/destination/[name].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import Navbar from '../Header/Navbar';
import PlanetInfoCard from '../planets/PlanetInfoCard';
import TouristPlaces from '../planets/TuristPlaces';

const Destination = ({ destinationData, isBooking }) => {
    const router = useRouter();
    const { name } = router.query;

    return (
        <div className="container mx-auto">
            <Navbar />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  text-white">

                {/* 3D Image */}
                <div className='w-full h-fit flex shadow-2xl shadow-black  rounded-md'

                >
                    {/* <Canvas>
                        <Image3d />
                    </Canvas> */}

                    <img
                        src={destinationData.image}
                        alt={destinationData.name}
                        className="w-full h-full object-cover  bg-transparent  rounded-md "
                    // style={{ clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' }}
                    />



                </div>


                {/* Destination Details */}
                <div className='flex-col p-5 bg-opacity-10 backdrop-blur-md backdrop-filter bg-slate-100  rounded-md'>
                    <h1 className=' text-6xl py-5  p-1'>
                        {destinationData.name}
                    </h1>

                    <div className='py-10 '>

                        {destinationData.desc}

                    </div>
                </div>


            </div>

            {/* <InfoContainer planetData={destinationData} /> */}

            <div className='bg-opacity-30 backdrop-blur-md backdrop-filter bg-blue-100 p-5 my-3 rounded-md '>

                <h1 className=' font-bold text-4xl py-4 text-white  '> Planet Information </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {
                        destinationData?.info?.map((planet, index) => {
                            return <PlanetInfoCard key={index} planetData={planet} />
                        })
                    }
                </div>
            </div>

            {/* Places to Visit */}
            <div className="bg-opacity-10 backdrop-blur-md backdrop-filter bg-blue-200 p-5 my-3 rounded-md">
                <h2 className=" font-bold text-4xl py-4 text-white  ">Places To Visit:</h2>
                <TouristPlaces touristPlaces={destinationData.touristPlaces} />
            </div>

            {/* Iternitery Details */}

            {
                isBooking ?
                    <div className='bg-opacity-10 backdrop-blur-md backdrop-filter bg-blue-200 p-5 my-3 rounded-md '>
                        <h2 className=" font-bold text-4xl py-4 text-white  ">Itinerary:</h2>
                        <ul className="list-disc pl-6">
                            {destinationData.itinerary.map((item) => (
                                <li key={item.day} className=' list-none mb-2 p-4 bg-opacity-70 backdrop-blur-md backdrop-filter bg-slate-100 cursor-pointer'>
                                    <strong>{item.day}:</strong> {item.activity}
                                </li>
                            ))}
                        </ul>
                    </div> : null
            }

            {/* turist Guide */}

        </div>
    );
};



export default Destination;
