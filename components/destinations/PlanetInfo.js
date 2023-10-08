// InfoContainer.js
import React from 'react';
import { Info, Item, Heading, Desc } from './InfoStyles';

const InfoContainer = ({ planetData }) => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 25,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1.5, duration: 1.5 },
        },
        exit: {
            opacity: 0,
            y: 25,
            transition: { duration: 1 },
        },
    };

    return (
        <Info
            className="bg-opacity-50 backdrop-blur-md backdrop-filter bg-white   py-5          flex flex-col gap-8 px-6 lg:flex-row lg:justify-between lg:gap-11 lg:px-0 lg:mb-36"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >

            <Item className="  flex justify-between items-center h-48 px-24 lg:flex-col lg:items-start lg:gap-6 lg:h-auto lg:px-15 w-full cursor-pointer hover:bg-blue-100">
                <Heading className="text-xs font-bold leading-16 tracking-0.046rem uppercase lg:text-base lg:leading-25 lg:tracking-0.0625rem">
                    Rotation Time
                </Heading>
                <Desc className="text-1.25rem lg:text-1.5rem lg:tracking-0.056rem">
                    {planetData.rotation}
                </Desc>
            </Item>
            <Item className="flex justify-between items-center h-48 px-24 lg:flex-col lg:items-start lg:gap-6 lg:h-auto lg:px-15 w-full cursor-pointer hover:bg-blue-100 ">
                <Heading className="text-xs font-bold leading-16 tracking-0.046rem uppercase lg:text-base lg:leading-25 lg:tracking-0.0625rem">
                    Revolution Time
                </Heading>
                <Desc className="text-1.25rem lg:text-1.5rem lg:tracking-0.056rem">
                    {planetData.revolution}
                </Desc>
            </Item>
            <Item className="flex justify-between items-center h-48 px-24 lg:flex-col lg:items-start lg:gap-6 lg:h-auto lg:px-15 w-full">
                <Heading className="text-xs leading-16 tracking-0.046rem uppercase lg:text-base lg:leading-25 lg:tracking-0.0625rem">
                    Radius
                </Heading>
                <Desc className="text-1.25rem lg:text-1.5rem lg:tracking-0.056rem">
                    {planetData.radius}
                </Desc>
            </Item>
            <Item className="flex justify-between items-center h-48 px-24 lg:flex-col lg:items-start lg:gap-6 lg:h-auto lg:px-15 w-full">
                <Heading className="text-xs leading-16 tracking-0.046rem uppercase lg:text-base lg:leading-25 lg:tracking-0.0625rem">
                    Average Temp.
                </Heading>
                <Desc className="text-1.25rem lg:text-1.5rem lg:tracking-0.056rem">
                    {planetData.temperature}
                </Desc>
            </Item>
        </Info>
    );
};

export default InfoContainer;
