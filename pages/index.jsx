import Footer from '@/components/Templates/Footer/Footer';
import Hero from '@/components/Templates/Hero/Hero';
import NavBar from '@/components/Templates/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Footer />
      </main>
    </>
  );
}
