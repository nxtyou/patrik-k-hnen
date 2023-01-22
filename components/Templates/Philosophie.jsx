import Button from '../Atoms/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import ArrowRight from '../Atoms/Icons/ArrowRight';
import ArrowLeft from '../Atoms/Icons/ArrowLeft';
import { useRef, useState } from 'react';

const Philosophie = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [progress, setProgress] = useState('0%');

  const cards = [
    {
      title: 'Gesundheit',
      description:
        'Er setzt körperliche Fitness an oberste Stelle, um langfristig erfolgreich zu sein und sein Leben optimal zu gestalten.'
    },
    {
      title: 'Win-Win Situationen',
      description:
        'Seine Philosophie im Business ist einfach: Eine langfristige Partnerschaft auf Augenhöhe aufzubauen, die eine Win-Win Situation für alle Beteiligten schafft.'
    }
  ];

  const prevNextButtons = [
    {
      ref: navigationPrevRef,
      icon: <ArrowRight className="transition-all group-hover:-translate-x-0.5" />
    },
    {
      ref: navigationNextRef,
      icon: <ArrowLeft className="transition-all group-hover:translate-x-0.5" />
    }
  ];

  return (
    <section
      style={{
        background:
          'radial-gradient(94.76% 85.62% at 0% 100%, rgba(0, 63, 125, 0.5) 0%, rgba(0, 63, 125, 0) 100%), #040615'
      }}
      className="content-gradient relative py-28 text-white lg:pb-80 xl:pb-72 2xl:pb-60">
      <div className="relative z-10 mx-auto max-w-7xl ">
        <div className=" max-w-xl px-6 sm:px-8 md:pl-20 lg:max-w-lg xl:max-w-[30rem] xl:pr-0 2xl:px-0">
          <h2 className="text-5xl font-medium">Philosophie</h2>
          <p className="mt-4 text-white/80  md:mt-10 md:text-xl">
            Patrik Kühnen sucht jede Partnerschaft sorgfältig aus und ist immer auf eine
            langfristige Zusammenarbeit ausgelegt.
          </p>
          <Button className="mt-8 md:mt-10">Mehr erfahren</Button>
        </div>
        <div className="left-1/2 top-0 mt-12 pl-6 sm:pl-8 md:pl-20 lg:absolute lg:mt-0 lg:w-[50vw] lg:pl-0">
          <Swiper
            className="mySwiper"
            slidesPerView="auto"
            loop={true}
            grabCursor={true}
            spaceBetween={16}
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current
            }}
            onSlideChangeTransitionStart={(swiper) => {
              if (swiper.activeIndex % 2) {
                setProgress('100%');
              } else {
                setProgress('0%');
              }
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2
              },
              640: {
                slidesPerView: 1.5
              },
              1024: {
                slidesPerView: 1.7
              }
            }}>
            {cards.map(({ title, description }, i) => (
              <SwiperSlide key={i}>
                <div className="philosophy-number aa text-5xl font-extrabold  md:text-9xl">
                  {'0' + (i + 1)}
                </div>
                <div className="mt-3 md:ml-16 md:-mt-14">
                  <h3 className="whitespace-nowrap text-2xl font-medium md:text-3xl">{title}</h3>
                  <p className="mt-4 text-white/80">{description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mx-auto mt-24 flex max-w-md items-center space-x-4 pr-6 sm:space-x-12 sm:pr-0 md:mt-16">
            <div className="flex items-center space-x-4">
              {prevNextButtons.map(({ ref, icon }, i) => (
                <button
                  key={i}
                  ref={ref}
                  className="group flex h-16 w-16 items-center justify-center rounded-full border border-white/10 transition-all hover:border-white">
                  {icon}
                </button>
              ))}
            </div>
            <div className="mx-auto h-1 w-full bg-white/10">
              <span
                className="block h-full bg-international-orange transition-all duration-500"
                style={{ width: progress }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophie;
