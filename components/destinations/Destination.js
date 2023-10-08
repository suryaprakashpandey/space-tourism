// pages/destination/[name].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import InfoContainer from './PlanetInfo';
import Navbar from '../Header/Navbar';

const Destination = ({ destinationData }) => {
    const router = useRouter();
    const { name } = router.query;

    return (
        <div className="container mx-auto">
            <Navbar />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  text-white">

                {/* 3D Image */}
                <div className='w-full h-fit flex shadow-2xl shadow-black'

                >
                    {/* <Canvas>
                        <Image3d />
                    </Canvas> */}

                    <img
                        src={destinationData.image}
                        alt={destinationData.name}
                        className="w-full h-full object-cover mb-4 rounded-md bg-transparent "
                    // style={{ clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' }}
                    />



                </div>


                {/* Destination Details */}
                <div className='flex-col p-5 '>
                    <h1 className=' text-6xl py-5  p-1'>
                        {destinationData.name}
                    </h1>

                    <div className='py-10 '>

                        {destinationData.desc}

                    </div>
                </div>


            </div>

            <InfoContainer planetData={destinationData} />




            <div>
                <p className="text-gray-600 mb-4">{destinationData.description}</p>
                <h2 className="text-xl font-semibold mb-2">Itinerary:</h2>
                <ul className="list-disc pl-6">
                    {destinationData.itinerary.map((item) => (
                        <li key={item.day}>
                            <strong>{item.day}:</strong> {item.activity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// export async function getStaticPaths() {
//     return {
//         paths: [
//             {
//                 params: {
//                     name: 'mars',
//                     name: 'ok'
//                 },
//             },
//             // Add more paths as needed
//         ],
//         fallback: true, // false or "blocking"
//     };
// }

// export async function getStaticProps({ params }) {
//     // Fetch destination data based on the "name" parameter
//     // Replace this with your data fetching logic
//     const destinationData = {
//         name: 'Mars',
//         description: 'The fourth planet from the Sun.',
//         itinerary: [
//             { day: 'Day 1', activity: 'Arrival on Mars' },
//             { day: 'Day 2', activity: 'Exploration of Olympus Mons' },
//             { day: 'Day 3', activity: 'Visit to Valles Marineris' },
//         ],
//         // Add other data properties
//     };

//     return { props: { destinationData } };
// }

export default Destination;
