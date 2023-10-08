import React from 'react'

const DestinationInfo = ({ destination }) => {
    return (

        <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
            <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">
                {destination.name}
            </h3>
            <p className="text-gray-600">{destination.description}</p>

        </div>
    )
}

export default DestinationInfo