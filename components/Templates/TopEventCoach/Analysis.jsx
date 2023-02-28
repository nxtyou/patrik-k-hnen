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
          <h2 className="text-2xl font-medium md:text-3xl">Training mit Leidenschaft</h2>
          <div className="mt-6 text-white/80 md:mt-7 md:text-lg lg:text-xl">
            <p className="lg:!leading-loose">
              Seit 1998 hat Patrik Kühnen mehr als 30 erfolgreiche Tennis-Events in verschiedenen
              Robinson Clubs auf der ganzen Welt geleitet. Zusammen mit seinem Trainerteam
              vermittelt er neben Technik, Taktik und mentalen Aspekten vor allem Leidenschaft und
              Freude am Spiel. Die Camps sind regelmäßig ausgebucht und die meisten Gäste kommen
              gern wieder, wenn sie einmal dabei waren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
