
import Destination from '@/components/destinations/Destination';
import { useRouter } from 'next/router';
import React from 'react'


const DestinationPage = () => {
    const router = useRouter();

    const { id } = router.query;

    const destinationData = {
        
        name: 'Mars',
        desc: 'Mars is the fourth planet from the Sun and the second- smallest planet in the Solar System, after Mercury.It is often referred to as the "Red Planet" due to its reddish appearance, which is caused by iron oxide(rust) on its surface.Mars has been a subject of fascination for scientists and explorers due to its potential for harboring life and its similarities to Earth.',
        touristPlaces: [
            { title: "Title", link: "/link", desc: "This is Description", img: "/img/europa.png" },
            { title: "Title", link: "/link", desc: "This is Description", img: "/img/europa.png" },
            { title: "Title", link: "/link", desc: "This is Description", img: "/img/europa.png" },

        ],

        itinerary: [
            { day: 'Weeks 1-9', activity: 'Travel to Mars and Observe Mars from Orbit' },
            { day: 'Week 10', activity: 'Arrival at Gale Crater (Land at Aeolis Mons)' },
            { day: 'Day 71-75', activity: 'Explore the Base of Mount Sharp and Ancient Lakebeds' },
            { day: 'Day 76-80', activity: 'Visit Olympus Mons and Conduct Geological Studies' },
            { day: 'Day 81-85', activity: 'Explore Valles Marineris and its Spectacular Canyons' },
            { day: 'Day 86-90', activity: 'Visit Curiosity Rover Landing Site and Gather Data' },
            { day: 'Day 91-95', activity: 'Explore Victoria Crater and its Geological Features' },
            { day: 'Day 96-100', activity: 'Investigate the Face on Mars in Cydonia Region' },
            { day: 'Weeks 11-20', activity: 'Return to Earth' },
        ],

        image: "/img/FullMoon.jpg",
        info: [
            { rotation: '0.99 Days' },
            { revolution: '687 Days' },
            { radius: '3,389.5 KM' },
            { temperature: '-80°C to 20°C' },
        ]

    }


    return (
        <div className='bg-opacity-80 p-3 backdrop-blur-md backdrop-filter container mx-auto min-h-screen'>
            <Destination destinationData={destinationData} />

        </div>
    )
}

export default DestinationPage;