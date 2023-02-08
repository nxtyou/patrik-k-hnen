import About from '@/components/Templates/BMWOpen/About';
import Analysis from '@/components/Templates/BMWOpen/Analysis';
import Banner from '@/components/Templates/BMWOpen/Banner';
import Gallery from '@/components/Templates/BMWOpen/Gallery';
import Hero from '@/components/Templates/BMWOpen/Hero';
import Footer from '@/components/Templates/Shared/Footer/Footer';
import NavBar2 from '@/components/Templates/Shared/NavBar/NavBar2';
import 'swiper/css';
import 'swiper/css/navigation';

function BMWOpen() {
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

export default BMWOpen;
