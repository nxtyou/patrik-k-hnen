import Link from 'next/link';

const Analysis = () => {
  return (
    <section id='more' className="py-16 px-6 sm:px-8 md:px-20 xl:px-32">
      <div className="mx-auto flex flex-col-reverse lg:flex-row max-w-7xl ">
        <div className='mt-10 lg:mt-0'>
          <h4 className="text-sm font-semibold">DIENSTLEISTUNGEN</h4>
          <ul className="mt-3 text-lg leading-9 text-white/80">
            <li>Moderator & Speaker</li>
            <li>Soziale Kampagnen</li>
            <li>PR-Strategie</li>
            <li>Medienstrategie</li>
          </ul>
          <h4 className="mt-12 text-sm font-semibold">MEHR INFORMATIONEN</h4>
          <Link className="mt-3 text-lg leading-9 link-underline relative" href="http://www.eineadresse.de/">
            www.eineadresse.de&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        </div>
        <div className=" lg:pl-32">
          <h2 className="text-2xl md:text-3xl font-medium">Wimbledon Analysen und Vertrauen von SKY</h2>
          <div className="mt-6 md:mt-7 md:text-lg lg:text-2xl text-white/80">
            <p className="lg:!leading-loose">
              Schon in seiner Jugend war Patrik von diesem Turnier fasziniert und inspiriert. Das
              Erreichen des Viertelfinales 1988 und der Sieg gegen Jimmy Connors in fünf
              dramatischen Sätzen, sowie das Doppel Halbfinale 1993 waren goldene Momente seiner
              Karriere als Profi, wodurch ihm die Ehre zuteil wurde, Mitglied im “Last-8 Club” zu
              werden. Die Zusammenarbeit mit Sky in Wimbledon ist jedes Jahr ein Highlight in
              Patrik’s Kalender und bringt ein paar seiner schönsten Erinnerungen an seine Zeit als
              Spieler zurück.
            </p>
            <p className="mt-6 lg:!leading-loose">
              Er ist seit über 20 Jahren als Tennis Experte im Fernsehen tätig und bietet seine
              Expertise auch für Podiumsdiskussionen, Live Events oder andere Medienformate an.
              Seine fundierte Erfahrung und sein umfassendes Wissen über den Tennissport bieten
              einen einzigartigen Mehrwert für jedes Projekt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
