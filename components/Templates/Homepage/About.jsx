import PlayButton from '@/components/Atoms/PlayButton';

import BgAnimatedText from '../../Atoms/BgAnimatedText/BgAnimatedText';
import PlayIcon from '../../Atoms/Icons/PlayIcon';
import InfoGrid from '../Shared/InfoGrid';

const About = () => {
  const bgText1 = [
    {
      text: 'Strategie',
      outline: true
    },
    {
      text: 'Creative'
    },
    {
      text: 'Strategie',
      outline: true
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
        'Als ehemaliger Tennisprofi und langjähriger Coach weiß Patrik Kühnen, wie Menschen Höchstleistungen erzielen und was es braucht, um nachhaltig erfolgreich zu sein – nicht nur im Sport.'
    },
    {
      title: 'Tennisexperte',
      subtitle:
        'Seit mehr als 20 Jahren ist Patrik Kühnen Experte für Tennis im Fernsehen. Auch bei Podiumsdiskussionen, Live-Events oder in andere Medienformaten gibt er sein fundiertes Wissen als ehemaliger Profis und langjähriger Davis-Cup-Coach weiter.'
    },
    {
      title: 'Coach',
      subtitle:
        'Die Arbeit mit Freizeitspielern liegt Patrik Kühnen schon lange am Herzen. In Robinson Clubs sowie mit Reiseveranstalter Patricio Travel bietet er regelmäßig Tenniscamps für alle Alters- und Spielklassen an. Er ist auch für individuelle Events und VIP-Coaching buchbar. '
    },
    {
      title: 'Turnierdirektor',
      subtitle:
        'Seit 2008 ist Patrik Kühnen Turnierdirektor der BMW Open by American Express in München. Das ATP 250er-Event zählt zu den vier größten Herrenturnieren in Deutschland. Es hat eine lange Tradition als Bestandteil der europäischen Sandplatz-Serie, die mit den French Open ihren Höhepunkt erreicht.'
    }
  ];

  return (
    <section className=" relative bg-white text-black">
      <div className="relative pt-[55%] md:pt-[39%]">
        {/* <video className='relative z-10'>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video> */}
        <img
          width={1440}
          height={617}
          className="absolute top-0 left-0 h-full w-full object-cover"
          src="/images/video-thumbnail.jpg"
          alt=""
        />
        <PlayButton big />
      </div>
      <InfoGrid data={cards} />
      <div className="relative mt-14 overflow-hidden pt-64 md:mt-28 md:pt-96">
        <BgAnimatedText className="absolute top-0 " fullText={bgText1} backward />
        <BgAnimatedText className="absolute top-32 md:top-48" fullText={bgText2} />
      </div>
    </section>
  );
};

export default About;
