import ButtonLink from '@/components/Atoms/ButtonLink';
import ArrowRight2 from '@/components/Atoms/Icons/ArrowRight2';

const Banner = () => {
  return (
    <section
      style={{
        background:
          'linear-gradient(180deg, rgba(4, 6, 23, 0) 30%, rgba(4, 6, 23, 1) 100%), rgba(4, 6, 23, 0.35)'
      }}
      className="relative py-24 px-6 sm:px-8 md:py-32 md:px-20 xl:px-32">
      <img
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
        src="/images/photos/interview-sky-news.jpg"
        width="1440"
        height="613"
        alt=""
      />
      <div className="relative mx-auto max-w-7xl">
        <div
          style={{ background: 'rgba(81, 81, 81, 0.2)' }}
          className="w-fit rounded-[0.2rem] py-1.5 px-3 text-sm font-semibold uppercase tracking-widest">
          EXPERTE
        </div>
        <img
          className="mt-16 md:mt-40 md:h-14 md:w-24"
          src="/images/logos/sky.svg"
          width="71"
          height="43"
          alt="sky news logo"
        />
        <h2 className="mt-9 text-5xl font-medium md:text-6xl">Tennis Experte</h2>
        <ButtonLink
          href="/sky-tennis"
          aria-label="Mehr Informationen"
          className="group mt-10"
          rightIcon={<ArrowRight2 animated black />}>
          Mehr Informationen
        </ButtonLink>
      </div>
    </section>
  );
};

export default Banner;
