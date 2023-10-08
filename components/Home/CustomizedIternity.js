import { useState } from 'react';
import { motion } from 'framer-motion';

const CustomizedItinerariesSection = () => {
    const [selectedDestinations, setSelectedDestinations] = useState([]);
    const [travelDates, setTravelDates] = useState('');
    const [itinerary, setItinerary] = useState([]);
    const [showItinerary, setShowItinerary] = useState(false);

    const generateItinerary = () => {
        // Implement your logic to generate the customized itinerary based on user selections.
        // For simplicity, we'll use a placeholder itinerary here.
        const generatedItinerary = [
            { day: 'Day 1', destination: 'Mars' },
            { day: 'Day 2', destination: 'Jupiter' },
            { day: 'Day 3', destination: 'Saturn' },
        ];

        setItinerary(generatedItinerary);
        setShowItinerary(true);
    };

    return (
        <section className="bg-gray-100 py-12 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Customize Your Itinerary
                </h2>
                <p className="text-gray-600 mb-8">
                    Plan your cosmic adventure by selecting destinations and travel dates.
                </p>

                {/* Destination Selection */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Select Destinations:
                    </label>
                    {/* Implement your destination selection UI here */}
                    {/* Example: */}
                    <select
                        multiple
                        className="w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        onChange={(e) => setSelectedDestinations(Array.from(e.target.selectedOptions, (option) => option.value))}
                    >
                        <option value="Mars">Mars</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Saturn">Saturn</option>
                        {/* Add more destination options */}
                    </select>
                </div>

                {/* Travel Dates Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Travel Dates:
                    </label>
                    <input
                        type="text"
                        placeholder="Select dates"
                        className="w-full rounded-full py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        value={travelDates}
                        onChange={(e) => setTravelDates(e.target.value)}
                    />
                </div>

                {/* Generate Itinerary Button */}
                <button
                    onClick={generateItinerary}
                    className="bg-yellow-500 text-blue-900 py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
                >
                    Generate Itinerary
                </button>

                {/* Display Itinerary */}
                {showItinerary && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-8 text-left"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Your Customized Itinerary:
                        </h3>
                        <ul>
                            {itinerary.map((item, index) => (
                                <li key={index} className="mb-2">
                                    <span className="font-bold">{item.day}:</span> {item.destination}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default CustomizedItinerariesSection;
