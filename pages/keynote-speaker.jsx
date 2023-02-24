import About from '@/components/Templates/KeynoteSpeaker/About';
import Analysis from '@/components/Templates/KeynoteSpeaker/Analysis';
import Banner from '@/components/Templates/KeynoteSpeaker/Banner';
import Gallery from '@/components/Templates/KeynoteSpeaker/Gallery';
import Hero from '@/components/Templates/KeynoteSpeaker/Hero';
import Footer from '@/components/Templates/Shared/Footer/Footer';
import NavBar2 from '@/components/Templates/Shared/NavBar/NavBar2';
import 'swiper/css';
import 'swiper/css/navigation';

function KeynoteSpeaker() {
  return (
    <>
      <NavBar2 ctaText="Mehr Informationen" ctaTarget="/contact" />
      <main>
        <Hero />
        <Analysis />
        <Gallery />
        <About />
        <Banner />
        <Footer />
      </main>
    </>
  );
}

export default KeynoteSpeaker;
