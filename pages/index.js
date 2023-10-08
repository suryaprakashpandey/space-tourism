import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Header/Navbar'
import Link from 'next/link'
import Featured from '@/components/Home/Featured'
import About from '@/components/Home/About'
import DestinationList from '@/components/Home/DestinationList'
import EducationalContent from '@/components/Home/EducationalContent'
import Footer from '@/components/Home/Footer'
import { Image3d } from '@/components/destinations/3d'
import { Canvas } from '@react-three/fiber'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // <main
  //   className={`flex min-h-screen container flex-col items-center justify-between p-24`}

  // >
  return (

    <div className="relative min-h-screen ">

      <Featured />
      {/* <About /> */}
      <DestinationList />
      <EducationalContent />
      <Footer />

    </div>
  )
}
