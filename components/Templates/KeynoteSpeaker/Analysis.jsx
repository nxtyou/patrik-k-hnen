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
            Bessere Performance durch mehr Bewegung
          </h2>
          {/* Seine Expertise für Bewegung, Gesundheit und Performance hat Patrik Kühnen mit einem Studium am Institute of Integrative Nutrition in New York vertieft. Seine Kenntnisse und seine eigenen Erfahrungen in diesen Bereichen gibt er sowohl an Profisportler als auch Hobbyathleten weiter. So hilft er Menschen dabei, die Bedeutung von Bewegung und eines gesunden Lebensstils zu erkennen und selbst zu erfahren. In seinen Impulsen erklärt er, wie sich die Macht der Gewohnheit verändern lässt und warum ein bewusstes Denken wichtig ist für nachhaltigen Erfolg. */}
          <div className="mt-6 text-white/80 md:mt-7 md:text-lg lg:text-xl">
            <p className="lg:!leading-loose">
              Seine Expertise für Bewegung, Gesundheit und Performance hat Patrik Kühnen mit einem
              Studium am Institute of Integrative Nutrition in New York vertieft. Seine Kenntnisse
              und seine eigenen Erfahrungen in diesen Bereichen gibt er sowohl an Profisportler als
              auch Hobbyathleten weiter. So hilft er Menschen dabei, die Bedeutung von Bewegung und
              eines gesunden Lebensstils zu erkennen und selbst zu erfahren
            </p>
            <p className="mt-6 lg:!leading-loose">
              In seinen Impulsen erklärt er, wie sich die Macht der Gewohnheit verändern lässt und
              warum ein bewusstes Denken wichtig ist für nachhaltigen Erfolg.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
