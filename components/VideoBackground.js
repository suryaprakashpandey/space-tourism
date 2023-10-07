import React from "react";

const VideoBackground = () => {
    return (
        <div className="relative">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/source/solar_system_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


        </div>
    );
};

export default VideoBackground;
