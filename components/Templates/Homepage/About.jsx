import Image from 'next/image';
import BgAnimatedText from '../../Atoms/BgAnimatedText/BgAnimatedText';
import PlayIcon from '../../Atoms/Icons/PlayIcon';

const About = () => {
  const bgText1 = [
    {
      text: 'Strategie',
      outline: true
    },
    {
      text: 'Creative'
    }
  ];

  const bgText2 = [
    {
      text: 'Development'
    },
    {
      text: 'Blockchain Development',
      outline: true
    }
  ];

  const cards = [
    {
      title: 'Keynote Speaker',
      subtitle:
        'Als langjähriger Spitzensportler und Coach weiß Patrik Kühnen aus erster Hand was Höchstleistung bedeutet und was es braucht um nachhaltig erfolgreich zu sein.      '
    },
    {
      title: 'Tennis Experte',
      subtitle:
        'Patrik Kühnen ist seit über 20 Jahren als Tennis Experte im Fernsehen tätig und bietet seine Expertise auch für Podiumsdiskussionen, Live Events oder andere Medienformate an. Seine fundierte Erfahrung und sein umfassendes Wissen über den Tennissport bieten einen einzigartigen Mehrwert für Ihr Projekt.'
    },
    {
      title: 'Coach',
      subtitle:
        'Patrik Kühnen ist sowohl für Robinson + Patricio Travel als auch für spezielle Anlässe buchbar. Als Tennis-Experte bietet er maßgeschneiderte Events an, einschließlich Robinson + Patricio Travel und VIP-Coaching.'
    },
    {
      title: 'Turnierdirektor',
      subtitle:
        'Patrik Kühnen ist seit 2008 Direktor des ATP World Tour Tennisturniers “BMW Open by FWU” in München. Die “BMW Open by FWU” sind das erste von vier ATP Turnieren in Deutschland und ein fester Bestandteil der europäischen Sandplatz-Serie, welche mit den French Open ihren Höhepunkt erreicht.'
    }
  ];

  return (
    <section className=" relative bg-white text-black">
      <div className="relative pt-[55%] md:pt-[39%]">
        {/* <video className='relative z-10'>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video> */}
        <Image
          width={1440}
          height={617}
          className="absolute top-0 left-0 h-full w-full"
          src="/images/video-thumbnail.jpg"
          alt=""
        />
        <button className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 md:h-16 md:w-16 lg:h-24 lg:w-24">
          <PlayIcon className="w-3 lg:w-auto" />
        </button>
      </div>
      <div className="px-6 pt-8 sm:px-8 md:px-20 lg:px-32">
        <div className="mx-auto max-w-7xl ">
          <div className="grid-cols-2 grid-rows-2 gap-8 gap-x-16 space-y-4 md:grid md:space-y-0">
            {cards.map(({ title, subtitle }, i) => (
              <div key={i} className="  border-b border-black py-8">
                <div className="">
                  <div className="font-semibold">{`0${i + 1}`}</div>
                  <h3 className="mt-8 text-3xl font-medium">{title}</h3>
                  <p className="mt-4">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative mt-14 overflow-hidden pt-64 md:mt-28 md:pt-96">
        <BgAnimatedText className="absolute top-0 " fullText={bgText1} backward />
        <BgAnimatedText className="absolute top-32 md:top-48" fullText={bgText2} />
      </div>
    </section>
  );
};

export default About;
