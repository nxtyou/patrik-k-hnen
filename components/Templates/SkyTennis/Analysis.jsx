import Link from 'next/link';

const Analysis = () => {
  return (
    <section id="more" className="py-16 px-6 sm:px-8 md:px-20 xl:px-32">
      <div className="mx-auto flex max-w-7xl flex-col-reverse lg:flex-row ">
        <div className="mt-10 lg:mt-0">
          <h2 className="text-sm font-semibold">DIENSTLEISTUNGEN</h2>
          <ul className="mt-3 text-lg leading-9 text-white/80">
            <li>Moderator & Speaker</li>
            <li>Soziale Kampagnen</li>
            <li>PR-Strategie</li>
            <li>Medienstrategie</li>
          </ul>
          <h2 className="mt-12 text-sm font-semibold">MEHR INFORMATIONEN</h2>
          <Link
            className="link-underline relative mt-3 text-lg leading-9"
            href="http://www.eineadresse.de/">
            www.eineadresse.de
          </Link>
        </div>
        <div className=" lg:pl-32">
          <h2 className="text-2xl font-medium md:text-3xl">
            Wimbledon Analysen und Vertrauen von SKY
          </h2>
          <div className="mt-6 text-white/80 md:mt-7 md:text-lg lg:text-xl">
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
