import Awards from '@/components/Templates/Awards';
import Clients from '@/components/Templates/Clients';
import Footer from '@/components/Templates/Footer/Footer';
import Hero from '@/components/Templates/Hero/Hero';
import NavBar from '@/components/Templates/NavBar';
import Philosophie from '@/components/Templates/Philosophie';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Clients />
        <Awards />
        <Philosophie />
      </main>
      <Footer />
    </>
  );
}
