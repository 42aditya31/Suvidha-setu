import InfoSection from '@/components/InfoSection';
import FeaturesAsymmetrical from '@/components/HeadDepartment';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HeroSection2 from '@/components/Herosectio2';
import Slideshow from '@/components/Slideshow';
import Advertisment from '@/components/Advertisment';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
   <>
     <Header/>
     <HeroSection/>
     <Slideshow/>
     <FeaturesAsymmetrical/>
     <InfoSection/>
     <Advertisment/>
     <Footer/>
     {/* <HeroSection2/> */}
     </>  
    
  );
}
