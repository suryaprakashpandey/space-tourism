
import Destination from '@/components/destinations/Destination';
import { useRouter } from 'next/router';
import React from 'react'


const DestinationPage = () => {
    const router = useRouter();

    const { id } = router.query;

    const destinationData = {

        name: 'Moon',
        desc: 'The Moon is Earth\'s natural satellite and has been a subject of fascination and exploration for centuries.',
        touristPlaces: [
            { title: 'Apollo 11 Landing Site (Tranquility Base)', link: '', desc: 'Visit the historic Apollo 11 landing site where humans first set foot on the Moon. Explore the "Tranquility Base" and learn about the incredible journey of Neil Armstrong and Buzz Aldrin.', img: '' },
            { title: 'Lunar Module Descent Stages', link: '', desc: 'Discover the remnants of the lunar module descent stages left behind by the Apollo missions. These spacecraft played a crucial role in safely landing astronauts on the Moon.', img: '' },
            { title: 'Lunar Rovers and Instruments', link: '', desc: 'Explore the lunar rovers and scientific instruments used by astronauts to conduct experiments and collect data on the Moon\'s geology and environment.', img: '' },
            { title: 'Tycho Crater', link: '', desc: 'Visit the Tycho Crater, a prominent lunar impact crater known for its central peak. Study the unique features and geological history of this lunar landmark.', img: '' },
            { title: 'Mare Tranquillitatis (Sea of Tranquility)', link: '', desc: 'Explore the Mare Tranquillitatis, also known as the "Sea of Tranquility." This vast lunar plain is famous for its role in the Apollo 11 mission and offers stunning lunar vistas.', img: '' },
            { title: 'Copernicus Crater', link: '', desc: 'Visit the Copernicus Crater, a large and well-preserved lunar impact crater. Study its intricate ejecta pattern and geological formations.', img: '' },
        ],
        itinerary: [
            { day: 'Day 1', activity: 'Departure from Earth' },
            { day: 'Day 2-6', activity: 'Observe Moon from Orbit & Prepare for Landing' },
            { day: 'Day 7', activity: 'Arrival at the Moon (Land at Apollo 11 Site)' },
            { day: 'Day 8-9', activity: 'Explore Tranquility Base and Collect Lunar Samples' },
            { day: 'Day 10-11', activity: 'Visit Lunar Rovers and Instruments' },
            { day: 'Day 12-13', activity: 'Explore Tycho Crater and Copernicus Crater' },
            { day: 'Day 14', activity: 'Reflect and Depart for Earth' },
        ],
        image: "/img/Moon.jpg",

        info: [
            { rotation: '27.3 Days' },
            { revolution: '27.3 Days' },
            { radius: '1,737.1 KM' },
            { temperature: '-173°C to 127°C' },
        ],


    }


    return (
        <div className='bg-opacity-80 p-3 backdrop-blur-md backdrop-filter container mx-auto min-h-screen'>
            <Destination destinationData={destinationData} />

        </div>
    )
}

export default DestinationPage;