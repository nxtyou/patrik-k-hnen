import Footer from '@/components/Templates/Footer/Footer';
import NavBar2 from '@/components/Templates/NavBar/NavBar2';
import About from '@/components/Templates/SkyTennis/About';
import Analysis from '@/components/Templates/SkyTennis/Analysis';
import Hero from '@/components/Templates/SkyTennis/Hero';
import 'swiper/css';
import 'swiper/css/navigation';

const SkyTenis = () => {
  return (
    <>
      <NavBar2 />
      <main>
        <Hero />
        <Analysis />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default SkyTenis;
