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
            Langjährige Partner zu Spieler und Firmen
          </h2>
          <div className="mt-6 text-white/80 md:mt-7 md:text-lg lg:text-xl">
            <p className="lg:!leading-loose">
              Durch seine langjährigen persönlichen Beziehungen zu Spielern, Managern und Sponsoren
              gelingt es ihm nicht nur Top Spieler nach München zu holen, sondern er schafft es auch
              die Verbundenheit von Partner Firmen zu dem Turnier zu stärken.
            </p>
            <p className="mt-6 lg:!leading-loose">
              “Ich habe es mir zur persönlichen Aufgabe gemacht, nicht nur die Top Spieler für unser
              Turnier zu verpflichten, sondern auch eine familiäre Atmosphäre zu schaffen, die
              Spieler, Sponsoren und Publikum jedes Jahr auf’s Neue anzieht.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
