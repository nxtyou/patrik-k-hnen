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
            Verbesserte Performance durch Bewegung
          </h2>
          <div className="mt-6 text-white/80 md:mt-7 md:text-lg lg:text-xl">
            <p className="lg:!leading-loose">
              Seine Expertise für Bewegung, Gesundheit und Performance hat er mit dem Studium am
              Institute of Integrative Nutrition in New York vertieft, um sein Wissen an Profis und
              Amateure fundierter weitergeben zu können.
            </p>
            <p className="mt-6 lg:!leading-loose">
              Er hilft Menschen die Bedeutung von Bewegung und einem gesunden Lebensstil, in Bezug
              auf die individuelle Leistungsfähigkeit und Nachhaltigkeit ihres Erfolgs zu erkennen
              und schafft ein wertvolles Bewusstsein für die Macht der Gewohnheiten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
