import BgAnimatedText from '@/components/Atoms/BgAnimatedText/BgAnimatedText';
import ArrowDown2 from '@/components/Atoms/Icons/ArrowDown2';

function Hero() {
  const bgText1 = [
    {
      text: 'Patrik.',
      outline: true
    },
    {
      text: 'KÜhnen Cloud.'
    },
    {
      text: 'heart. sleeve.',
      outline: true
    },
    {
      text: 'head. cloud'
    }
  ];

  const bgText2 = [
    {
      text: 'head. KÜhnen. Patrik Cloud.',
      outline: true
    },
    {
      text: 'heart. sleeve.'
    },
    {
      text: 'head. cloud',
      outline: true
    }
  ];

  return (
    <section className="relative h-[500px] overflow-hidden">
      <div
        style={{
          background:
            'linear-gradient(to bottom, rgba(4, 6, 23, 0.6), rgba(0, 0, 0, 0.85)), url(/images/photos/patrik-playing-tennis.jpg)',
          backgroundPosition: '0 20%'
        }}
        className="absolute left-0 top-0 h-full w-full">
        <div className="relative z-[100] mt-64 flex flex-col items-center justify-center gap-7">
          <h1 className="cursor-default text-[3rem] font-medium sm:text-[4rem]">
            Datenschutzerklärung
          </h1>
          <a
            href="#more"
            aria-label="Gehen"
            className="group flex flex-col items-center justify-center gap-1 text-sm font-medium transition-all hover:border-white">
            <ArrowDown2 className="h-5 w-5 transition-all duration-300 group-hover:translate-y-0.5" />
            Weitere Informationen
          </a>
        </div>
      </div>
      <BgAnimatedText
        className="absolute bottom-32 md:bottom-24 md:text-[9rem]"
        fullText={bgText1}
        backward
        dark
      />
      <BgAnimatedText
        className="absolute bottom-0 z-50 md:-bottom-16 md:text-[9rem]"
        fullText={bgText2}
        dark
      />
    </section>
  );
}
export default Hero;
