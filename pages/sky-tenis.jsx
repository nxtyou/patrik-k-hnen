import Footer from '@/components/Templates/Footer/Footer';
import NavBar2 from '@/components/Templates/NavBar/NavBar2';
import Hero from '@/components/Templates/SkyTenis/Hero';
import 'swiper/css';
import 'swiper/css/navigation';

const SkyTenis = () => {
  return (
    <>
      <NavBar2 />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default SkyTenis;
