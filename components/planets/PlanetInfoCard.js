import React from 'react'

const PlanetInfoCard = ({ planetData }) => {
    return (
        // <div className="bg-white rounded-lg shadow-md p-4 w-64">
        //     <h2 className="text-lg font-semibold mb-2">{planetData[0]}</h2>
        //     <p className="text-sm text-gray-600">{planetData[1]}</p>
        // </div>

        <div>
            {Object.entries(planetData).map(([key, value]) => (
                <div key={key} className="mb-2 p-4 bg-opacity-70 backdrop-blur-md backdrop-filter bg-slate-100 cursor-pointer">
                    <h2 className="text-lg font-semibold">{key}</h2>
                    <p className="text-sm text-gray-600">{value}</p>
                </div>
            ))}
        </div>
    )
}

export default PlanetInfoCard