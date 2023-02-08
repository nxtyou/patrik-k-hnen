import Button from '@/components/Atoms/Button';
import ArrowRight2 from '@/components/Atoms/Icons/ArrowRight2';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative py-24 px-6 sm:px-8 md:py-32 md:px-20 xl:px-32">
      <Image
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/images/photos/patrik-playing-tennis.jpg"
        width="1440"
        height="613"
        alt=""
      />
      <div className="relative mx-auto max-w-7xl">
        <div
          style={{ background: 'rgba(81, 81, 81, 0.2)' }}
          className="w-fit rounded-[0.2rem] py-1.5 px-3 text-sm font-semibold uppercase tracking-widest">
          SPEAKER
        </div>
        <Image
          className="mt-16 md:mt-40"
          src="/images/logo.svg"
          width="198"
          height="22"
          alt="Patrik Kühnen logo"
        />
        <h2 className="mt-9 text-5xl font-medium md:text-6xl">Keynote Speaker</h2>
        <Button
          aria-label="Mehr Informationen"
          className="group mt-10"
          rightIcon={<ArrowRight2 animated black />}>
          Mehr Informationen
        </Button>
      </div>
    </section>
  );
};

export default Banner;
