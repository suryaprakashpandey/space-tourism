import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Featured from '@/components/Featured'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // <main
  //   className={`flex min-h-screen container flex-col items-center justify-between p-24`}

  // >
  return (

    <div className="relative min-h-screen">

      <Featured />

      <section className="container mx-auto py-16 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-200">
            We offer the best space tourism experience in the galaxy.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mt-16">
          {/* Feature 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Unparalleled Views</h3>
              <p className="mt-2 text-gray-600">
                Witness the beauty of our solar system's wonders.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Expert Guides</h3>
              <p className="mt-2 text-gray-600">
                Our experienced astronauts will make your journey memorable.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Safety First</h3>
              <p className="mt-2 text-gray-600">
                Your safety is our top priority during your adventure.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Custom Itineraries</h3>
              <p className="mt-2 text-gray-600">
                Plan your journey to the destinations of your dreams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
