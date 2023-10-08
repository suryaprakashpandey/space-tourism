import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Featured from '@/components/Featured'
import About from '@/components/About'
import DestinationList from '@/components/DestinationList'
import EducationalContent from '@/components/EducationalContent'

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

    </div>
  )
}
