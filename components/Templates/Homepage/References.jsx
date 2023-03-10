import { useInView } from '@react-spring/web';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../../Atoms/Button';
import ArrowLeft from '../../Atoms/Icons/ArrowRight';
import ArrowRight from '../../Atoms/Icons/ArrowLeft';
import FourSquares from '../../Atoms/Icons/FourSquares';
import ReferencesCard from '../../Organisms/ReferencesCard';

const References = () => {
  const cards = [
    {
      label: 'Campagne',
      title: 'SPEAKER',
      link: '/',
      bg: '/images/photos/compagne-1.jpg',
      logo: {
        imgSrc: '/images/logos/pk.svg',
        width: 41,
        height: 33
      },
      video: '/videos/references/01.mp4'
    },
    {
      label: 'Platform',
      title: 'TENNIS EXPERTE',
      link: '/sky-tennis',
      bg: '/images/photos/platform.jpg',
      logo: {
        imgSrc: '/images/logos/sky-sport.svg',
        width: 130,
        height: 31
      },
      video: '/videos/references/04.mp4'
    },
    {
      label: 'Campagne',
      title: 'TURNIERDIREKTOR',
      link: '/',
      bg: '/images/photos/compagne-2.jpg',
      logo: {
        imgSrc: '/images/logos/bmw.svg',
        width: 48,
        height: 48
      },
      video: '/videos/references/03.mp4'
    },
    {
      label: 'Activatie',
      title: 'COACH ',
      link: '/',
      bg: '/images/photos/activitie.jpg',
      logo: {
        imgSrc: '/images/logos/pk.svg',
        width: 41,
        height: 33
      },
      video: '/videos/references/02.mp4'
    }
  ];

  const [progress, setProgress] = useState(0);

  const prevNextButtons = [
    {
      navClass: 'prevReferences',
      icon: <ArrowRight className="transition-all duration-300 group-hover:-translate-x-0.5" />,
      ariaLabel: 'nach links wischen'
    },
    {
      navClass: 'nextReferences',
      icon: <ArrowLeft className="transition-all duration-300 group-hover:translate-x-0.5" />,
      ariaLabel: 'wische nach rechts'
    }
  ];

  const [ref, isInView] = useInView({
    once: true,
    rootMargin: '-40% 0%'
  });

  const updateProgress = (swiper) => setProgress(swiper.progress * 100);

  return (
    <section className=" -mt-16 text-white md:-mt-40">
      <Swiper
        ref={ref}
        className="h-full !px-6 font-poppins sm:!px-8 md:!pl-20 xl:!pl-32"
        spaceBetween={32}
        modules={[Navigation]}
        grabCursor={true}
        navigation={{
          prevEl: '.prevReferences',
          nextEl: '.nextReferences'
        }}
        onProgress={updateProgress}
        breakpoints={{
          0: {
            slidesPerView: 1.3
          },
          400: {
            slidesPerView: 1.3
          },
          640: {
            slidesPerView: 2.25
          },
          1024: {
            slidesPerView: 2.75
          },
          1440: {
            slidesPerView: 3.75
          }
        }}>
        {cards.map((card, i) => {
          return (
            <SwiperSlide
              key={i}
              className={`relative 2xl:max-w-none  ${i % 2 !== 0 ? 'lg:mt-16' : ''}`}>
              <ReferencesCard {...card} isParentInView={isInView} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="mx-auto mt-8 flex max-w-5xl items-center space-x-4 px-6 sm:space-x-12 sm:px-8 md:mt-16 md:px-20 lg:mt-24 lg:px-32">
        <div className="flex items-center space-x-4">
          {prevNextButtons.map(({ ref, icon, navClass, ariaLabel }, i) => (
            <button
              aria-label={ariaLabel}
              key={i}
              ref={ref}
              className={
                'group flex h-16 w-16 items-center justify-center rounded-full border border-white/10 transition-all hover:border-white ' +
                navClass
              }>
              {icon}
            </button>
          ))}
        </div>
        <div className="mx-auto h-1 w-full bg-white/10">
          <span
            className="block h-full bg-international-orange transition-all duration-500"
            style={{ width: progress + '%' }}
          />
        </div>
      </div>
      <Button className="mx-auto mt-16 md:mt-28" leftIcon={<FourSquares />}>
        Mehr erfahren
      </Button>
    </section>
  );
};

export default References;
