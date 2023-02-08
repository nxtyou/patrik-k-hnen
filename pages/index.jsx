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
import Link from 'next/link';

export default function Index() {
  return (
    <main class="flex min-h-screen items-center justify-center text-center text-4xl font-bold tracking-[2px] sm:text-5xl">
      <nav>
        <ul class="hide flex flex-col gap-5 transition-all duration-1000">
          <li>
            <Link href="home" className="hover:text-iron">
              HOME
            </Link>
          </li>
          <li>
            <Link href="sky-tennis" className="hover:text-iron">
              SKY TENNIS
            </Link>
          </li>
          <li>
            <Link href="keynote-speaker" className="hover:text-iron">
              KEYNOTE SPEAKER
            </Link>
          </li>
          <li>
            <Link href="top-event-coach" className="hover:text-iron">
              TOP EVENT COACH
            </Link>
          </li>
          <li>
            <Link href="bmw-open" className="hover:text-iron">
              BMW OPEN
            </Link>
          </li>
          <li>
            <Link href="contact" className="hover:text-iron">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
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
