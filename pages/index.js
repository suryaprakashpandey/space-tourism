
import Featured from '@/components/Home/Featured'
import DestinationList from '@/components/Home/DestinationList'
import EducationalContent from '@/components/Home/EducationalContent'
import Footer from '@/components/Home/Footer'

export default function Home() {

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
