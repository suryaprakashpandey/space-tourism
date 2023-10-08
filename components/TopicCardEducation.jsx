import React from 'react'

const TopicCardEducation = ({ topic }) => {
    return (
        <div>
            <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                <p className="text-gray-600 mb-4">
                    Explore educational resources about {topic.title}.
                </p>
                <p className="text-yellow-500 hover:underline">Learn More</p>
            </div>

        </div>
    )
}

export default TopicCardEducation