import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="px-6 sm:px-8 md:px-20 xl:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <Image
            className="w-full object-cover"
            src="/images/photos/1.jpg"
            width="1216"
            height="684"
            alt=""
          />
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
              src="/images/photos/2.jpg"
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
              src="/images/photos/3.jpg"
            />
          </div>
        </div>
        <div className="mt-3 flex gap-3 md:mt-6 md:gap-6">
          <div className="flex-1">
            <Image
              className="w-full object-cover md:aspect-auto md:object-center"
              width="373"
              height="596"
              muted
              loop
              alt=""
              src="/images/photos/4.jpg"
            />
          </div>
          <div className="flex-1">
            <Image
              className="w-full object-cover object-right md:aspect-auto"
              width="596"
              height="596"
              muted
              loop
              alt=""
              src="/images/photos/5.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
