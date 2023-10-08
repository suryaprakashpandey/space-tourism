
import Destination from '@/components/destinations/Destination';
import { useRouter } from 'next/router';
import React from 'react'


const DestinationPage = () => {
    const router = useRouter();

    const { id } = router.query;

    const destinationData = {
        name: 'Mars',
        desc: 'Mars is the fourth planet from the Sun and the second- smallest planet in the Solar System, after Mercury.It is often referred to as the "Red Planet" due to its reddish appearance, which is caused by iron oxide(rust) on its surface.Mars has been a subject of fascination for scientists and explorers due to its potential for harboring life and its similarities to Earth.',
        itinerary: [
            { day: 'Day 1', activity: 'Arrival on Mars' },
            { day: 'Day 2', activity: 'Exploration of Olympus Mons' },
            { day: 'Day 3', activity: 'Visit to Valles Marineris' },
        ],
        image: "/img/FullMoon.jpg",
        rotation: '0.99 Days',
        revolution: '687 Days',
        radius: '3,389.5 KM',
        temperature: '-80°C to 20°C',
    }


    return (
        <div className='bg-opacity-80 p-3 backdrop-blur-md backdrop-filter container mx-auto min-h-screen'>
            <Destination destinationData={destinationData} />

        </div>
    )
}

export default DestinationPage;