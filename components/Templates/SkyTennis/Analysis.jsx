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
            Wimbledon-Analysen und das Vertrauen von Sky
          </h2>
          <div className="mt-6 text-white/80 md:mt-7 md:text-lg lg:text-xl">
            <p className="lg:!leading-loose">
              Patrik Kühnens Faszination für das berühmteste Turnier der Welt resultiert bereits aus
              der Jugend. Die legendären Duelle von John McEnroe und Björn Borg begeisterten ihn
              einst für den Tennissport. Jahre später, als Profi, feierte er im All England Club von
              Wimbledon seinen größten Einzelerfolg – 1988 besiegte er dort Jimmy Connors in fünf
              Sätzen und erreichte das Viertelfinale. Seitdem ist er Mitglied im sogenannten
              „Last-8-Club“.
            </p>
            <p className="mt-6 lg:!leading-loose">
              Im Doppel erreichte er an der Seite von Gary Muller 1993 sogar das Halbfinale. Die
              TV-Übertragungen aus Wimbledon mit Sky gehören auch deshalb zu seinen Highlights in
              jedem Jahr – sie wecken die schönsten Erinnerungen an seine Zeit als Spieler.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
