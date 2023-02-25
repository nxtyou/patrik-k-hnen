const Gallery = () => {
  return (
    <section className="px-6 sm:px-8 md:px-20 xl:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <img
            className="min-h-[205px] w-full object-cover"
            src="/images/photos/patrik-as-speaker2.jpg"
            width="1216"
            height="684"
            alt="patrik as speaker"
          />
        </div>
        <div className="mt-3 flex flex-col md:mt-6 md:flex-row md:space-x-6">
          <div className="md:w-1/2">
            <img
              style={{ objectPosition: '50% 20%' }}
              className="max-h-[335px] w-full object-cover"
              width="596"
              height="335"
              alt="patrik as speaker"
              src="/images/photos/patrik-as-speaker3.jpg"
            />
          </div>
          <div className="mt-3 md:mt-0 md:w-1/2">
            <img
              style={{ objectPosition: '50% 25%' }}
              className="max-h-[335px] w-full object-cover"
              width="596"
              height="335"
              alt="patrik as speaker"
              src="/images/photos/patrik-as-speaker4.jpg"
            />
          </div>
        </div>
        <div className="mt-3 flex gap-3 md:mt-6 md:gap-6">
          <div className="flex-1">
            <img
              style={{ objectPosition: '50% 10%' }}
              className="max-h-[596px] w-full object-cover object-top md:aspect-auto md:object-center"
              width="373"
              height="596"
              alt="patrik as speaker"
              src="/images/photos/patrik-as-speaker5.jpg"
            />
          </div>
          <div className="flex-1">
            <img
              style={{ objectPosition: '50% 10%' }}
              className="max-h-[596px] w-full object-cover object-right md:aspect-auto"
              width="596"
              height="596"
              alt="patrik as speaker"
              src="/images/photos/patrik-as-speaker6.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
