import PlayButton from '@/components/Atoms/PlayButton';
import Image from 'next/image';

const Videos = () => {
  return (
    <section className="px-6 sm:px-8 md:px-20 xl:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <Image
            className="w-full object-cover"
            src="/images/photos/prize-ceremony.jpg"
            width="1216"
            height="684"
            alt=""
            sizes="85.0356295vw"
            quality={100}
          />
          <PlayButton />
        </div>
        <div className="mt-3 flex flex-col md:mt-6 md:flex-row md:space-x-6">
          <div className="md:w-1/2 ">
            <Image
              className="w-full"
              width="596"
              height="335"
              muted
              loop
              alt=""
              src="/images/photos/in-tv-interview-1.jpg"
              quality={100}
            />
          </div>
          <div className="mt-3 md:mt-0 md:w-1/2">
            <Image
              className="w-full"
              width="596"
              height="335"
              muted
              loop
              alt=""
              src="/images/photos/in-tv-interview-2.jpg"
              quality={100}
            />
          </div>
        </div>
        <div className="mt-3 flex space-x-3 md:mt-6 md:space-x-6">
          <div className="w-1/2 ">
            <Image
              className="aspect-[89/137] w-full object-cover object-[-2rem] md:aspect-auto md:object-center"
              width="596"
              height="596"
              muted
              loop
              alt=""
              src="/images/photos/with-sky-news.jpg"
              sizes="(max-width: 768px) 43.259259259vw, 39.196525516vw"
              quality={100}
            />
          </div>
          <div className="w-1/2">
            <Image
              className="aspect-[89/137] w-full object-cover object-right md:aspect-auto"
              width="596"
              height="596"
              muted
              loop
              alt=""
              src="/images/photos/from-the-stands.jpg"
              sizes="(max-width: 768px) 43.259259259vw, 39.196525516vw"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
