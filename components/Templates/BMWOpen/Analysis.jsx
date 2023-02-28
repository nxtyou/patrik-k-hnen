import Link from 'next/link';

const Analysis = () => {
  return (
    <section id="more" className="py-16 px-6 sm:px-8 md:px-20 xl:px-32">
      <div className="mx-auto flex max-w-7xl flex-col-reverse lg:flex-row ">
        <div className="mt-10 lg:mt-0">
          <h2 className="text-sm font-semibold">DIENSTLEISTUNGEN</h2>
          <ul className="mt-3 text-lg leading-9 text-white/80">
            <li>Keynote Speaker</li>
            <li>Turnierdirektor</li>
            <li>Tennisexperte</li>
            <li>Coach</li>
          </ul>
          <h2 className="mt-12 text-sm font-semibold">MEHR INFORMATIONEN</h2>
          <Link
            className="link-underline relative mt-3 text-lg leading-9"
            href="mailto:pk-contact@patrikkuehnen.com">
            pk-contact@patrikkuehnen.com
          </Link>
        </div>
        <div className=" lg:pl-32">
          <h2 className="text-2xl font-medium md:text-3xl">
            Kontakte zu Spielern, Verbindungen zu Firmen
          </h2>
          <div className="mt-6 text-white/80 md:mt-7 md:text-lg lg:text-xl">
            <p className="lg:!leading-loose">
              Durch seine guten Beziehungen zu Profis und Managern lockt Patrik Kühnen jedes Jahr
              Topspieler nach München. Sein starkes Netzwerk ermöglicht es ihm zudem, langfristige
              Partnerschaften mit Sponsoren aufzubauen und regelmäßig neue Kooperationen zu
              schließen
            </p>
            <p className="mt-6 lg:!leading-loose">
              Als Turnierdirektor liegt es ihm vor allem am Herzen, auf der Anlage des MTTC Iphitos
              eine familiäre Atmosphäre zu schaffen, in der sich Spieler, Sponsoren und das Publikum
              wohlfühlen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
