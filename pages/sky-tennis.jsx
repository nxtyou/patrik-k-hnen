import Footer from '@/components/Templates/Shared/Footer/Footer';
import NavBar2 from '@/components/Templates/Shared/NavBar/NavBar2';
import About from '@/components/Templates/SkyTennis/About';
import Analysis from '@/components/Templates/SkyTennis/Analysis';
import Hero from '@/components/Templates/SkyTennis/Hero';
import 'swiper/css';
import 'swiper/css/navigation';
import Banner from '@/components/Templates/SkyTennis/Banner';

const SkyTenis = () => {
  return (
    <>
      <NavBar2 />
      <main>
        <Hero />
        <Analysis />
        <About />
        <Banner />
      </main>
      <Footer />
    </>
  );
};

export default SkyTenis;
