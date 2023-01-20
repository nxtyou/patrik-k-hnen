import Hero from '@/components/Templates/Hero/Hero';
import NavBar from '@/components/Templates/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <div className="h-screen"></div>
      </main>
    </>
  );
}
