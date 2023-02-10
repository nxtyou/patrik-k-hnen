import Awards from '@/components/Templates/Homepage/Awards';
import References from '@/components/Templates/Homepage/References';
import Clients from '@/components/Templates/Homepage/Clients';
import Footer from '@/components/Templates/Shared/Footer/Footer';
import Hero from '@/components/Templates/Homepage/Hero';
import NavBar from '@/components/Templates/Shared/NavBar/NavBar';
import Philosophie from '@/components/Templates/Homepage/Philosophie';
import 'swiper/css';
import 'swiper/css/navigation';
import About from '@/components/Templates/Homepage/About';

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
        <Philosophie />
      </main>
      <Footer />
    </>
  );
}
