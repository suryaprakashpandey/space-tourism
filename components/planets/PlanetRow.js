// components/PlanetRow.js
import React from 'react';
import PlanetInfoBox from './PlanetInfoBox';

const PlanetRow = ({ planets }) => {
    return (
        <div className="flex space-x-4">
            {planets.map((planet, index) => (
                <PlanetInfoBox key={index} planet={planet} />
            ))}
        </div>
    );
};

export default PlanetRow;
