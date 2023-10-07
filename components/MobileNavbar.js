import Link from 'next/link';
import { useState } from 'react';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden">
            <button
                onClick={toggleMenu}
                className="block bg-opacity-30 backdrop-blur-md backdrop-filter bg-gray-100 p-2 rounded-full transition-all  text-white hover:font-bold focus:outline-none "
            >
                {
                    !isOpen ?

                        <svg
                            className="w-6 h-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3.5 5.75A.75.75 0 0 1 4.25 5h15.5a.75.75 0 0 1 0 1.5H4.25a.75.75 0 0 1-.75-.75zm0 5.5a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 0 1.5H4.25a.75.75 0 0 1-.75-.75zm0 5.5a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 0 1.5H4.25a.75.75 0 0 1-.75-.75z"
                            />
                        </svg> :
                        <svg className="w-6 h-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                }
            </button>

            {isOpen && (
                <div className=" mt-2 py-3 relative z-10 w-full rounded-sm">
                    <Link href="/" className="block px-4 py-2 cursor-pointer bg-opacity-30 backdrop-blur-md backdrop-filter bg-gray-100  hover:bg-gray-200 rounded-sm text-white hover:text-gray-800 mb-1">
                        Home

                    </Link>
                    <Link href="/destinations" className="block px-4 py-2 cursor-pointer bg-opacity-30 backdrop-blur-md backdrop-filter bg-gray-100 hover:bg-gray-200 rounded-sm text-white hover:text-gray-800 mb-1">
                        Destinations

                    </Link>
                    <Link href="/about" className="block px-4 py-2 cursor-pointer  bg-opacity-30 backdrop-blur-md backdrop-filter bg-gray-100 hover:bg-gray-200  rounded-sm text-white hover:text-gray-800 mb-1">
                        About

                    </Link>
                    <Link href="/contact" className="block px-4 py-2 cursor-pointer  bg-opacity-30 backdrop-blur-md backdrop-filter bg-gray-100 hover:bg-gray-200  rounded-sm text-white hover:text-gray-800 mb-1">
                        Contact

                    </Link>
                </div>
            )}
        </div>
    );
};

export default MobileNavbar;
