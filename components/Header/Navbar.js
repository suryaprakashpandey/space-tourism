import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className=" hidden md:block p-4 ">
            <div className="container mx-auto flex justify-between items-center m-2">
                <Link href="/" className="text-white text-6xl font-bold">
                    Space Ventures
                </Link>

                <div className="bg-opacity-10 backdrop-blur-md backdrop-filter bg-red-50 p-3 px-6 rounded-full">
                    {/* <Link className="cursor-pointer space-x-2 text-lg p-2 m-1 font-semibold hover:text-gray-300 text-white w-full" href="/">
                        Home
                    </Link> */}
                    <Link href="/destinations" className="cursor-pointer space-x-2 font-semibold text-lg  p-2 m-1 hover:text-gray-300 text-white w-full">
                        Destinations
                    </Link>
                    <Link href="/explore" className="cursor-pointer space-x-2 font-semibold text-lg  p-2 m-1 hover:text-gray-300 text-white w-full">
                        Explore
                    </Link>
                    <Link href="/about" className="cursor-pointer space-x-2 text-lg font-semibold p-2 m-1 hover:text-gray-300 text-white w-full">
                        About
                    </Link>
                    <Link href="/account" className="cursor-pointer space-x-2 text-lg font-semibold  p-2 m-1 hover:text-gray-300 text-white w-full">
                        Login
                    </Link>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
