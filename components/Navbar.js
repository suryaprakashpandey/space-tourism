import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className=" hidden md:block p-4 ">
            <div className="container mx-auto flex justify-between items-center m-2">
                <Link href="/" className="text-white text-2xl font-bold">
                    Solar System Voyager
                </Link>

                <div className="bg-opacity-30 backdrop-blur-md backdrop-filter bg-gray-100 p-3 px-6 rounded-full">
                    <Link className="cursor-pointer space-x-2 text-lg text-gray-300 p-2 m-1 hover:text-white w-full" href="/">
                        Home
                    </Link>
                    <Link href="/destinations" className="cursor-pointer space-x-2 text-lg text-gray-300 p-2 m-1 hover:text-white w-full">
                        Destinations
                    </Link>
                    <Link href="/about" className="cursor-pointer space-x-2 text-lg text-gray-300 p-2 m-1 hover:text-white w-full">
                        About
                    </Link>
                    <Link href="/contact" className="cursor-pointer space-x-2 text-lg text-gray-300 p-2 m-1 hover:text-white w-full">
                        Contact
                    </Link>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
