import ArrowDown from '@/components/Atoms/Icons/ArrowDown';
import ArrowLeft2 from '@/components/Atoms/Icons/ArrowLeft2';
import ArrowRight2 from '@/components/Atoms/Icons/ArrowRight2';
import useWindowDimensions from '@/utils/hooks/getWindowDimensions';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = () => {
  const slidesContent = [
    {
      title: 'Keynote Speaker',
      subtitle:
        'Als langjähriger Spitzensportler und Coach weiß Patrik aus erster Hand was Höchstleistung bedeutet und was es braucht um nachhaltig erfolgreich zu sein.'
    }
  ];

  const { height } = useWindowDimensions();

  return (
    <section>
      <Swiper style={{ height: height + 'px' }}>
        {slidesContent.map(({ title, subtitle, customer, year }, i) => (
          <SwiperSlide key={i}>
            <Image
              priority={true}
              alt=""
              className="absolute top-0 left-0 h-full w-full object-cover"
              src="/images/photos/bmw-open.jpg"
              width="1440"
              height="778"
            />
            <div
              style={{
                background:
                  'linear-gradient(180deg, rgba(4, 6, 23, 0) 30%, rgba(4, 6, 23, 1) 100%), rgba(4, 6, 23, 0.35)'
              }}
              className="absolute left-0 top-0 h-full w-full"></div>
            <div className="absolute bottom-[7%] w-full px-6 sm:px-8 md:bottom-[15%] md:px-20 xl:px-32">
              <div className="mx-auto max-w-7xl">
                <div className="max-w-xl">
                  <Image src="/images/logo.svg" alt="" width="254" height="40" className="" />
                  <h1 className="mt-8 text-4xl font-medium md:text-6xl">{title}</h1>
                  <p className="mt-4 md:text-2xl">{subtitle}</p>
                </div>
                <div className="mt-16 flex flex-col-reverse justify-between md:mt-14 lg:flex-row lg:items-center mini-screen:mt-12">
                  <a
                    href="#more"
                    aria-label="Gehen"
                    className="group mt-12 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 transition-all hover:border-white md:h-20 md:w-20 mini-screen:mt-8">
                    <ArrowDown className="w-3 transition-all duration-300 group-hover:translate-y-0.5 md:w-auto" />
                  </a>
                  {customer && year && (
                    <ul className="flex items-center space-x-8">
                      <li className="flex flex-col">
                        <span className="font-sm font-poppins font-semibold">KUNDE</span>
                        <span className="mt-4 text-lg">{customer}</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="font-sm font-poppins font-semibold">JAHR</span>
                        <span className="mt-4 text-lg">{year}</span>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 space-y-4 md:block lg:right-16">
              <button
                aria-label="wische nach rechts"
                style={{ background: 'rgba(4, 6, 23, 0.4)' }}
                className="group flex h-14 w-14 items-center justify-center rounded-full">
                <ArrowRight2 animated />
              </button>
              <button
                aria-label="nach links wischen"
                style={{ background: 'rgba(4, 6, 23, 0.4)' }}
                className="group flex h-14 w-14 items-center justify-center rounded-full">
                <ArrowLeft2 animated />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
