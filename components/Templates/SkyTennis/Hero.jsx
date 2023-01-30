import ArrowDown from '@/components/Atoms/Icons/ArrowDown';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = () => {
  const slidesContent = [
    {
      title: 'Tennis Experte',
      subtitle: 'Patrik Kühnen ist seit über 20 Jahren als Tennis Experte fürs Fernsehen tätig.',
      customer: 'SKY',
      year: '2023'
    }
  ];

  return (
    <section className="blue-gradient-bg">
      <Swiper className="h-[90vh]">
        {slidesContent.map(({ title, subtitle, customer, year }, i) => (
          <SwiperSlide key={i}>
            <Image
              priority={true}
              alt=""
              className="absolute top-0 left-0 h-full w-full object-cover"
              src="/images/photos/interview-sky-news.png"
              width="1440"
              height="778"
            />
            <div
              style={{
                background:
                  'linear-gradient(180deg, rgba(4, 6, 23, 0) 30%, rgba(4, 6, 23, 1) 90%), rgba(4, 6, 23, 0.35)'
              }}
              className="absolute left-0 top-0 h-full w-full"></div>
            <div className="absolute bottom-[7%] px-6 sm:px-8 md:bottom-[15%] w-full md:px-20 xl:px-32">
              <div className='max-w-7xl mx-auto'>
                <div className="max-w-xl">
                  <img src="/images/logos/sky.svg" alt="" width="95" height="57" />
                  <h1 className="mt-4 text-4xl font-medium md:text-6xl">{title}</h1>
                  <p className="mt-4 md:text-2xl">{subtitle}</p>
                </div>
                <div className="mt-16 flex flex-col-reverse justify-between md:mt-14 lg:flex-row lg:items-center small-phones:mt-12">
                  <button
                    aria-label="Gehen"
                    className="group mt-12 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 transition-all hover:border-white md:h-20 md:w-20 small-phones:mt-8">
                    <ArrowDown className="w-3 transition-all duration-300 group-hover:translate-y-0.5 md:w-auto" />
                  </button>
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
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
