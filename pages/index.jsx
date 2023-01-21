import Clients from '@/components/Templates/Clients';
import Footer from '@/components/Templates/Footer/Footer';
import Hero from '@/components/Templates/Hero/Hero';
import NavBar from '@/components/Templates/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Clients />
        <Footer />
      </main>
    </>
  );
}
