import React from 'react'

const TopicCardEducation = ({ topic }) => {
    return (
        <div

            className="h-full bg-white p-4 flex-1 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
            <img
                src={topic.img}
                alt={topic.title}
                className="w-full h-80 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">
                {topic.title}
            </h3>
            <p className="text-gray-600">{topic.desc}</p>

        </div>
    )
}

export default TopicCardEducation