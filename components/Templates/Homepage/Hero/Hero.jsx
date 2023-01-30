import Button from '@/components/Atoms/Button';
import ArrowIcon from '@/components/Atoms/Icons/ArrowIcon';
import Image from 'next/image';
import useWindowDimensions from '@/utils/hooks/getWindowDimensions';
import BgAnimatedText from '@/components/Atoms/BgAnimatedText/BgAnimatedText';

const Hero = () => {
  const { height } = useWindowDimensions();

  const bgText1 = [
    {
      text: 'Patrik.',
      outline: true
    },
    {
      text: 'KÜhnen Cloud.'
    },
    {
      text: 'heart. sleeve.',
      outline: true
    },
    {
      text: 'head. cloud'
    }
  ];

  const bgText2 = [
    {
      text: 'head. KÜhnen. Patrik Cloud.',
      outline: true
    },
    {
      text: 'heart. sleeve.'
    },
    {
      text: 'head. cloud',
      outline: true
    }
  ];

  return (
    <section
      style={{
        background:
          'radial-gradient(94.76% 85.62% at 0% 100%, rgba(0, 63, 125, 0.5) 0%, rgba(0, 63, 125, 0) 100%), #040615',
        height: height + 'px'
      }}
      className="relative h-screen overflow-hidden text-white">
      <BgAnimatedText
        className="absolute bottom-32 md:bottom-60"
        fullText={bgText1}
        backward
        dark
      />
      <BgAnimatedText className="absolute bottom-4 z-50" fullText={bgText2} dark />

      <div className="absolute bottom-8 left-1/2 z-10 flex h-fit w-full max-w-md -translate-x-1/2 flex-col items-center px-4 text-center sm:bottom-32 md:top-1/2 md:left-24 md:max-w-xl md:-translate-y-1/2 md:translate-x-0 md:items-start md:text-left lg:left-32">
        <h1 className="text-6xl font-black uppercase md:text-8xl lg:text-9xl">Patrik KÜhnen</h1>
        <p className="mt-3 text-sm md:text-xl ">
          Als ehemaliger Tennisprofi nutzt Patrik Kühnen heute sein umfangreiches Wissen und seine
          Fähigkeiten als Experte, Coach, Keynote Speaker und Turnierdirektor, um Menschen und
          Klienten zu helfen ihre Tennis- und Karriereziele zu erreichen.
        </p>
        <Button className="mt-6" rightIcon={<ArrowIcon />} big>
          Mehr Informationen
        </Button>
        <div className="mt-16 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-white/50 transition-all duration-500 hover:border-white md:hidden">
          <div
            className="h-12 w-12 bg-no-repeat"
            style={{ backgroundImage: "url('/images/animtated-mobile-icon.svg')" }}></div>
        </div>
      </div>

      <Image
        priority={true}
        className="absolute bottom-0 right-[10%] w-auto"
        style={{ height: height * 0.9 + 'px' }}
        src="/images/Patrik-KÜhnen.png"
        alt=""
        width="424"
        height="1018"
      />
    </section>
  );
};

export default Hero;
