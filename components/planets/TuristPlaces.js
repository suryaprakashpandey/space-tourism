import Link from 'next/link';
import React from 'react';

const TouristPlaces = ({ touristPlaces }) => {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
            {touristPlaces.map((place, index) => (

                <div key={index} className="w-full  hover:shadow-lg transition duration-300 rounded-lg shadow-md bg-opacity-70 backdrop-blur-md backdrop-filter bg-slate-100 cursor-pointer p-5">
                    <h2 className="text-lg font-semibold mb-2">{place.title}</h2>
                    <img src={place.img} alt={place.title} className="mb-2  w-full  h-80 object-cover mb-4 rounded-md" />
                    <p className="text-gray-600">{place.desc}</p>
                    <Link
                        href={place.link}
                        className="text-blue-500 hover:underline mt-2 block"
                    >
                        Learn More
                    </Link>
                </div>

            ))}
        </div>

    );
};

export default TouristPlaces;
