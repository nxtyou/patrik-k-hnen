import About from '@/components/Templates/TopEventCoach/About';
import Analysis from '@/components/Templates/TopEventCoach/Analysis';
import Banner from '@/components/Templates/TopEventCoach/Banner';
import Gallery from '@/components/Templates/BMWOpen/Gallery';
import Hero from '@/components/Templates/TopEventCoach/Hero';
import Footer from '@/components/Templates/Shared/Footer/Footer';
import NavBar2 from '@/components/Templates/Shared/NavBar/NavBar2';
import 'swiper/css';
import 'swiper/css/navigation';

function TopEventCoach() {
  return (
    <>
      <NavBar2 />
      <main>
        <Hero />
        <Analysis />
        <Gallery />
        <About />
        <Banner />
        <Footer />
      </main>
    </>
  );
}

export default TopEventCoach;
