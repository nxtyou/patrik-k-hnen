import { useScroll, animated, useInView } from '@react-spring/web';
import { fontAktivGrotesk } from '@/components/Templates/Hero/Hero.module.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import Button from '@/components/Atoms/Button';
import ArrowIcon from '@/components/Atoms/Icons/ArrowIcon';
import Image from 'next/image';

const Hero = () => {
  const [scrollYProgress, setScrollYProgress] = useState(0);
  useScroll({
    onChange: ({ value: { scrollYProgress } }) => setScrollYProgress(scrollYProgress)
  });
  const [ref1, inViewText1] = useInView();
  const [ref2, inViewText2] = useInView();

  return (
    <div
      style={{
        background:
          'radial-gradient(94.76% 85.62% at 0% 100%, rgba(0, 63, 125, 0.5) 0%, rgba(0, 63, 125, 0) 100%), #040615'
      }}
      className="relative h-screen overflow-x-hidden text-white">
      {/* TODO Move this to a seprate component */}
      <div
        className={`absolute bottom-4 whitespace-nowrap leading-none will-change-transform ${fontAktivGrotesk}`}>
        <animated.div
          ref={ref1}
          className=" text-9xl font-extrabold uppercase md:text-[13rem]"
          style={inViewText1 ? { transform: `translateX(${scrollYProgress * -500}px)` } : {}}>
          <span className="text-outline-white/30">Patrik.</span>
          <span className="text-white/30">KÜhnen Cloud.</span>
          <span className="text-outline-white/30">heart. sleeve.</span>
          <span className="text-white/30">head. cloud</span>
        </animated.div>
        <animated.div
          ref={ref2}
          className="mt-4 text-9xl font-extrabold uppercase will-change-transform md:text-[13rem]"
          style={inViewText2 ? { transform: `translateX(${scrollYProgress * 500 - 2000}px)` } : {}}>
          <span className="text-outline-white/30">Kühnen. Patrickd.</span>
          <span className="text-outline-white/30">heart. sleeve.</span>
          <span className="text-white/30">head. cloud</span>
        </animated.div>
      </div>

      <div className="absolute bottom-24 left-1/2 z-10 flex w-full max-w-md -translate-x-1/2 flex-col items-center px-4 text-center font-inter sm:bottom-32 md:top-1/2 md:left-24 md:max-w-xl md:-translate-y-1/2 md:translate-x-0 md:items-start md:text-left lg:left-32">
        <h1 className="text-6xl font-black uppercase md:text-8xl lg:text-9xl">Patrik KÜhnen</h1>
        <p className="mt-3 text-sm md:text-xl ">
          Seit 2012 ist Patrik regelmäßig als Keynote Speaker bei hochkarätigen Veranstaltungen
          gefragt, um seine Expertise als Spitzensportler, Coach und Health Coach weiterzugeben.
        </p>
        <Button className="mt-6" Icon={<ArrowIcon />}>
          Mehr Informationen
        </Button>
        <div className="mt-16 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-white/50 transition-[border] duration-500 hover:border-white md:hidden">
          <div
            className="h-12 w-12 bg-no-repeat"
            style={{ backgroundImage: "url('/images/animtated-mobile-icon.svg')" }}></div>
        </div>
      </div>

      <Image
        className="absolute bottom-0 right-[10%] h-[85vh] w-auto md:h-[90vh]"
        src="/images/Patrik-KÜhnen.png"
        alt=""
        width="424"
        height="1018"
      />
    </div>
  );
};

export default Hero;
