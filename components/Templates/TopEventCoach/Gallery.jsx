const Gallery = () => {
  return (
    <section className="px-6 sm:px-8 md:px-20 xl:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <img
            className="min-h-[205px] w-full object-cover"
            src="/images/photos/patrik-playing-tennis3.jpg"
            width="1216"
            height="684"
            alt=""
          />
        </div>
        <div className="mt-3 flex flex-col md:mt-6 md:flex-row md:space-x-6">
          <div className="md:w-1/2">
            <img
              className="max-h-[335px] w-full object-cover"
              width="596"
              height="335"
              alt=""
              src="/images/photos/patrik-playing-tennis2.jpg"
            />
          </div>
          <div className="mt-3 md:mt-0 md:w-1/2">
            <img
              style={{ objectPosition: '50% 43%' }}
              className="max-h-[335px] w-full object-cover"
              width="596"
              height="335"
              alt=""
              src="/images/photos/patrik-gathering-tennis-balls3.jpg"
            />
          </div>
        </div>
        <div className="mt-3 flex gap-3 md:mt-6 md:gap-6">
          <div className="flex-1">
            <img
              className="max-h-[596px] w-full object-cover md:aspect-auto md:object-center"
              width="373"
              height="596"
              alt=""
              src="/images/photos/patrik-gathering-tennis-balls2.jpg"
            />
          </div>
          <div className="flex-1">
            <img
              style={{ objectPosition: '50% 20%' }}
              className="max-h-[596px] w-full object-cover md:aspect-auto"
              width="596"
              height="596"
              alt=""
              src="/images/photos/patrik-gathering-tennis-balls.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
