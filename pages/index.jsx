import About from '@/components/Templates/Homepage/About';
import Awards from '@/components/Templates/Homepage/Awards';
import Clients from '@/components/Templates/Homepage/Clients';
import Hero from '@/components/Templates/Homepage/Hero';
import Philosophy from '@/components/Templates/Homepage/Philosophy';
import References from '@/components/Templates/Homepage/References';
import Footer from '@/components/Templates/Shared/Footer/Footer';
import NavBar from '@/components/Templates/Shared/NavBar/NavBar';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <References />
        <Clients />
        <Awards />
        <Philosophy />
      </main>
      <Footer />
    </>
  );
}
