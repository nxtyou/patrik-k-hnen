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
            Kooperation mit Robinson seit über 20 Jahren
          </h2>
          <div className="mt-6 text-white/80 md:mt-7 md:text-lg lg:text-xl">
            <p className="lg:!leading-loose">
              Patrik Kühnen hat seine Kooperation mit dem angesehenen Cluburlaub-Anbieter Robinson
              bereits im Jahr 1998 begonnen und hat seither über 30 erfolgreiche Tennis-Events in
              verschiedenen Robinson Clubs auf der ganzen Welt geleitet. Seine Leidenschaft und
              Erfahrung im Bereich Tennis haben dazu beigetragen, dass seine Tennis-Camps regelmäßig
              ausgebucht sind. Dank seiner Expertise und seines Engagements ist er ein begehrter
              Partner für alle, die ihre Tennis-Fähigkeiten verbessern und ihre Leidenschaft für den
              Sport ausleben möchten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
