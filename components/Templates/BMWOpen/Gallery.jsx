const Gallery = () => {
  return (
    <section className="px-6 sm:px-8 md:px-20 xl:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <img
            className="min-h-[205px] w-full object-cover"
            src="/images/photos/patrik-in-bmw-open.jpg"
            width="1216"
            height="684"
            alt="patrik in bmw open"
          />
        </div>
        <div className="mt-3 flex flex-col md:mt-6 md:flex-row md:space-x-6">
          <div className="md:w-1/2 ">
            <img
              className="max-h-[335px] w-full object-cover"
              width="596"
              height="335"
              muted
              loop
              alt="patrik as speaker in bmw open"
              src="/images/photos/patrik-as-speaker-bmw-open.jpg"
            />
          </div>
          <div className="mt-3 md:mt-0 md:w-1/2">
            <img
              className="max-h-[335px] w-full object-cover"
              width="596"
              height="335"
              muted
              loop
              alt="patrik in bmw open stage"
              src="/images/photos/patrik-in-bmw-open-stage.jpg"
            />
          </div>
        </div>
        <div className="mt-3 flex gap-3 md:mt-6 md:gap-6">
          <div className="flex-1">
            <img
              className="max-h-[596px] w-full object-cover md:aspect-auto md:object-center"
              width="373"
              height="596"
              muted
              loop
              alt="patrik"
              src="/images/photos/patrik.jpg"
            />
          </div>
          <div className="flex-1">
            <img
              className="max-h-[596px] w-full object-cover object-top md:aspect-auto"
              width="596"
              height="596"
              muted
              loop
              alt="patrik collaborating"
              src="/images/photos/patrik-collaborating.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
