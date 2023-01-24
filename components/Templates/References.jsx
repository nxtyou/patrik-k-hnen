import Image from 'next/image';
import { useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../Atoms/Button';
import ArrowLeft from '../Atoms/Icons/ArrowLeft';
import ArrowRight from '../Atoms/Icons/ArrowRight';
import FourSquares from '../Atoms/Icons/FourSquares';

const References = () => {
  const cards = [
    {
      label: 'Campagne',
      title: 'SPEAKER',
      cta: 'Lorem ipsum',
      bg: '/images/photos/compagne-1.jpg',
      logo: {
        imgSrc:
          'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_180x120_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1665321454',
        srcSet:
          'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_180x120_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1665321454 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_240x160_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1665321454 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_360x240_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1665321454 3x'
      }
    },
    {
      label: 'Platform',
      title: 'TENNIS EXPERTE',
      cta: 'Lorem ipsum',
      bg: '/images/photos/platform.jpg',
      logo: {
        imgSrc:
          'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_180x120_fit_center-center_85_none/rancingnews365-logo.png?v=1665321455',
        srcSet:
          'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_180x120_fit_center-center_85_none/rancingnews365-logo.png?v=1665321455 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_240x160_fit_center-center_85_none/rancingnews365-logo.png?v=1665321455 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_360x240_fit_center-center_85_none/rancingnews365-logo.png?v=1665321455 3x'
      }
    },
    {
      label: 'Campagne',
      title: 'TURNIERDIREKTOR',
      cta: 'Lorem ipsum',
      bg: '/images/photos/compagne-2.jpg',
      logo: {
        imgSrc:
          'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_180x120_fit_center-center_85_none/swapfiets-logo.png?v=1665321457',
        srcSet:
          'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_180x120_fit_center-center_85_none/swapfiets-logo.png?v=1665321457 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_240x160_fit_center-center_85_none/swapfiets-logo.png?v=1665321457 2x'
      }
    },
    {
      label: 'Activatie',
      title: 'COACH ',
      cta: 'Lorem ipsum',
      bg: '/images/photos/activitie.jpg',
      logo: {
        imgSrc:
          'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_180x120_fit_center-center_85_none/Nationale-Nederlanden-logo.png?v=1665321459',
        srcSet:
          'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_180x120_fit_center-center_85_none/Nationale-Nederlanden-logo.png?v=1665321459 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_240x160_fit_center-center_85_none/Nationale-Nederlanden-logo.png?v=1665321459 2x'
      }
    },
    {
      label: 'Campagne',
      title: 'SPEAKER',
      cta: 'Lorem ipsum',
      bg: '/images/photos/compagne-1.jpg',
      logo: {
        imgSrc:
          'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_180x120_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1665321454',
        srcSet:
          'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_180x120_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1665321454 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_240x160_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1665321454 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_360x240_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1665321454 3x'
      }
    },
    {
      label: 'Platform',
      title: 'TENNIS EXPERTE',
      cta: 'Lorem ipsum',
      bg: '/images/photos/platform.jpg',
      logo: {
        imgSrc:
          'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_180x120_fit_center-center_85_none/rancingnews365-logo.png?v=1665321455',
        srcSet:
          'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_180x120_fit_center-center_85_none/rancingnews365-logo.png?v=1665321455 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_240x160_fit_center-center_85_none/rancingnews365-logo.png?v=1665321455 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_360x240_fit_center-center_85_none/rancingnews365-logo.png?v=1665321455 3x'
      }
    }
  ];

  const [progress, setProgress] = useState(0);

  const prevNextButtons = [
    {
      navClass: 'prevReferences',
      icon: <ArrowRight className="transition-all duration-300 group-hover:-translate-x-0.5" />
    },
    {
      navClass: 'nextReferences',
      icon: <ArrowLeft className="transition-all duration-300 group-hover:translate-x-0.5" />
    }
  ];

  return (
    <section className=" -mt-16 text-white md:-mt-40">
      <Swiper
        className="h-full !px-6 font-poppins sm:!px-8 md:!pl-20 lg:!pl-32"
        spaceBetween={32}
        modules={[Navigation]}
        grabCursor={true}
        navigation={{
          prevEl: '.prevReferences',
          nextEl: '.nextReferences'
        }}
        onSlideChangeTransitionStart={(swiper) => {
          setProgress(swiper.progress * 100);
        }}
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
            slidesPerView: 3.5
          },
          1720: {
            slidesPerView: 4.5
          }
        }}>
        {cards.map(({ label, title, cta, bg, logo }, i) => {
          console.log(label);
          return (
            <SwiperSlide
              key={i}
              className={`relative 2xl:max-w-none  ${i % 2 !== 0 ? 'lg:mt-16' : ''}`}>
              <div className="absolute top-12 left-6 z-10 rounded-[0.2rem] bg-white/10 py-1.5 px-3 text-xs font-medium uppercase tracking-widest">
                {label}
              </div>
              <div className="absolute left-6 bottom-12 z-10">
                <div>
                  <picture>
                    <source type="image/png" srcSet={logo.srcSet} />
                    <img className="card__logo" src={logo.imgSrc} width={120} height={80} alt="" />
                  </picture>
                </div>
                <h3 className="mt-6 text-2xl font-semibold uppercase">{title}</h3>
                <div className="mt-8 text-xs font-medium">{cta}</div>
              </div>
              <Image className=" w-full" src={bg} alt="" width="334" height="502" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="mx-auto mt-8 flex max-w-5xl items-center space-x-4 px-6 sm:space-x-12 sm:px-8 md:mt-16 md:px-20 lg:mt-24 lg:px-32">
        <div className="flex items-center space-x-4">
          {prevNextButtons.map(({ ref, icon, navClass }, i) => (
            <button
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
