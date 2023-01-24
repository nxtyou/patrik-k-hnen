import { useEffect, useState } from 'react';
import Swiper, { Navigation } from 'swiper';
import Button from '../Atoms/Button';
import ArrowLeft from '../Atoms/Icons/ArrowLeft';
import ArrowRight from '../Atoms/Icons/ArrowRight';

const Awards = () => {
  const cards = [
    {
      topText: 'seit 2019',
      middleText: 'Health Coach',
      bottomText: ['zertifiziert'],
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/Dutch-Interactive-Awards.png?v=1665325320',
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/Dutch-Interactive-Awards.png?v=1665325320 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_160x160_fit_center-center_85_none/Dutch-Interactive-Awards.png?v=1665325320 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_240x240_fit_center-center_85_none/Dutch-Interactive-Awards.png?v=1665325321 3x',
      alt: 'Logo dia'
    },
    {
      topText: 'seit 2012',
      middleText: 'Keynote Speaker',
      bottomText: ['zu den Themen Motivation, Team Building, Performance / Sport und Ernährung'],
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/Emerce.png?v=1668078664',
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/Emerce.png?v=1668078664 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_160x160_fit_center-center_85_none/Emerce.png?v=1668078664 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_240x240_fit_center-center_85_none/Emerce.png?v=1668078664 3x',
      alt: 'Logo dia'
    },
    {
      topText: 'seit 2008',
      middleText: 'Turnier-Direktor',
      bottomText: ['Direktor des ATP World Tour “BMW Open by FWU” Tennis Turniers in München'],
      isLightBlue: true,
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/Esprix.png?v=1665322482',
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/Esprix.png?v=1665322482 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_160x160_fit_center-center_85_none/Esprix.png?v=1665322482 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_240x240_fit_center-center_85_none/Esprix.png?v=1665322482 3x',
      alt: 'Logo dia'
    },
    {
      topText: 'seit 1998',
      middleText: 'Tennis Experte',
      bottomText: ['Sky', 'Wilson', 'Robinson'],
      isLightBlue: true,
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/SponsorRing.png?v=1665322482',
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/SponsorRing.png?v=1665322482 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_160x160_fit_center-center_85_none/SponsorRing.png?v=1665322482 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_240x240_fit_center-center_85_none/SponsorRing.png?v=1665322482 3x',
      alt: 'Logo dia'
    },
    {
      topText: 'Aus Leidenschaft',
      middleText: 'Coach',
      bottomText: ['Robinson Top Event', 'Patricio Travel', 'VIP Events'],
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/SponsorRing.png?v=1665322482',
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/SponsorRing.png?v=1665322482 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_160x160_fit_center-center_85_none/SponsorRing.png?v=1665322482 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_240x240_fit_center-center_85_none/SponsorRing.png?v=1665322482 3x',
      alt: 'Logo dia'
    },
    {
      topText: 'Mit Herzblut',
      middleText: 'Tennis Profi',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/SponsorRing.png?v=1665322482',
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/SponsorRing.png?v=1665322482 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_160x160_fit_center-center_85_none/SponsorRing.png?v=1665322482 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_240x240_fit_center-center_85_none/SponsorRing.png?v=1665322482 3x',
      alt: 'Logo dia'
    },
    {
      topText: '1993',
      middleText: 'Davis Cup Sieger',
      bottomText: ['und viele weitere Siege'],
      isLightBlue: true,
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/Website-van-het-Jaar.png?v=1665322482',
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_120x120_fit_center-center_85_none/Website-van-het-Jaar.png?v=1665322482 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_160x160_fit_center-center_85_none/Website-van-het-Jaar.png?v=1665322483 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Awards-logos/Wit/_240x240_fit_center-center_85_none/Website-van-het-Jaar.png?v=1665322483 3x',
      alt: 'Logo dia'
    }
  ];

  const prevNextButtons = [
    {
      navClass: 'prevAwards',
      icon: (
        <ArrowRight className="transition-all duration-300 group-hover:-translate-x-0.5" black />
      )
    },
    {
      navClass: 'nextAwards',
      icon: <ArrowLeft className="transition-all duration-300 group-hover:translate-x-0.5" black />
    }
  ];

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let swiper;
    let init = false;

    function initSwiper() {
      if (window.innerWidth < 1280) {
        if (!init) {
          init = true;
          swiper = new Swiper('.awardsSwiper', {
            spaceBetween: 16,
            grabCursor: true,
            slidesPerView: 'auto',
            navigation: {
              nextEl: '.nextAwards',
              prevEl: '.prevAwards'
            },
            modules: [Navigation]
          });
          swiper.on('slideChangeTransitionStart', (swiper) => {
            setProgress(swiper.progress * 100);
          });
        }
      } else if (init) {
        init = false;
        swiper.destroy();
      }
    }

    window.addEventListener('resize', initSwiper);
    initSwiper();
  }, []);

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse justify-between  xl:flex-row ">
        <div className="awardsSwiper mt-8 overflow-x-hidden md:mt-16 ">
          <div className="swiper-wrapper grid-cols-2 px-6 text-white sm:px-8 md:px-20 xl:mt-0  xl:!grid xl:gap-8 xl:pr-0">
            {cards.map(({ topText, middleText, bottomText, isLightBlue, imgSrc, srcSet }, i) => (
              <div
                key={i}
                className={`swiper-slide flex !h-auto max-w-[17.5rem] flex-col items-center  ${
                  isLightBlue ? 'bg-regal-blue' : 'bg-prussian-blue'
                } pt-14 pb-10 text-center md:pt-20 ${i % 2 !== 0 ? 'xl:mt-16 xl:-mb-16' : ''}`}>
                <div>
                  <picture>
                    <source type="image/png" srcSet={srcSet} />
                    <img src={imgSrc} width={80} height={80} alt="Logo dia" />
                  </picture>
                </div>
                <div className="mt-6 flex flex-col items-center">
                  <div className="text-sm">{topText}</div>
                  <h3 className="mt-2 text-lg font-bold">{middleText}</h3>
                  <div className="mt-2 flex flex-col items-center font-poppins text-sm font-medium leading-7">
                    {bottomText &&
                      bottomText.map((item, i2) => (
                        <div className="" key={i2}>
                          {item}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 flex max-w-xl items-center space-x-4 px-6 sm:space-x-12 sm:px-8 md:mt-16 lg:mt-24 xl:hidden">
            <div className="flex items-center space-x-4">
              {prevNextButtons.map(({ ref, icon, navClass }, i) => (
                <button
                  key={i}
                  ref={ref}
                  className={
                    'group flex h-16 w-16 items-center justify-center rounded-full border border-black/20 transition-all hover:border-black ' +
                    navClass
                  }>
                  {icon}
                </button>
              ))}
            </div>
            <div className="mx-auto h-1 w-full bg-iron">
              <span
                className="block h-full bg-black transition-all duration-500"
                style={{ width: progress + '%' }}
              />
            </div>
          </div>
        </div>

        <div className="px-6 sm:px-8 md:px-20 xl:px-16">
          <div className="sticky top-16  mx-auto text-black xl:max-w-md">
            <h2 className="max-w-md font-poppins text-3xl font-medium !leading-tight md:max-w-xl md:text-5xl">
              “Tennis ist immer noch mein Leben”
            </h2>
            <p className="mt-4 md:mt-4 md:text-xl">
              Der ehemalige Tennis Profi, Davis Cup Sieger und Davis Cup Kapitän ist heute
              Turnierdirektor der Tennis BMW OPEN BY AMERICAN EXPRESS in München, unterstützt
              WILSON, SKY und ROBINSON als Tennis Experte und gibt seine Erfahrung und sein Wissen
              über Sport, Gesundheit und Leistungsfähigkeit als Keynote Speaker weiter.
            </p>
            <Button className="mt-5" black>
              Mehr über Patrik Kühnen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
