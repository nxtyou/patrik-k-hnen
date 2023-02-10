import About from '@/components/Templates/Homepage/About';
import Awards from '@/components/Templates/Homepage/Awards';
import Clients from '@/components/Templates/Homepage/Clients';
import Hero from '@/components/Templates/Homepage/Hero';
import Philosophie from '@/components/Templates/Homepage/Philosophie';
import References from '@/components/Templates/Homepage/References';
import Footer from '@/components/Templates/Shared/Footer/Footer';
import NavBar2 from '@/components/Templates/Shared/NavBar/NavBar2';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <>
      <NavBar2 />
      <main>
        <Hero />
        <About />
        <References />
        <Clients />
        <Awards />
        <Philosophie />
      </main>
      <Footer />
    </>
  );
}
