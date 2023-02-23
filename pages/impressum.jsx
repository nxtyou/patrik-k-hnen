import Hero from '@/components/Templates/Impressum/Hero';
import Footer from '@/components/Templates/Shared/Footer/Footer';
import NavBar2 from '@/components/Templates/Shared/NavBar/NavBar2';

function impressum() {
  return (
    <>
      <NavBar2 ctaText="Hier zum Kontakt" />
      <main>
        <Hero />
        <div className="gradient">
          <section id="more">
            <div className="mx-auto w-full max-w-[1300px] py-16 px-4 text-white xl:px-5 2xl:px-0">
              <h2 className="text-[2rem] font-medium">Impressum</h2>
              <p className="opacity-80">Informationen gemäß § 5 TMG:</p>
              <ul className="flex flex-col opacity-80">
                <li>Patrik Kühnen</li>
                <li>25 KV HUB</li>
                <li className="mt-10">Gysslingstrasse 72</li>
                <li>80805 München, Deutschland</li>
                <li className="mt-10">
                  <a href="#">Tel: 0171 372598</a>
                </li>
                <li>
                  <a href="mailto:pk-contact@patrikkuehnen.com">
                    E-Mail: pk-contact@patrikkuehnen.com
                  </a>
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="font-bold text-[#fff]">Umsatzsteuer:</h3>
                <p className="opacity-80">
                  Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE 178799540
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-[#fff]">
                  Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV:
                </h3>
                <p className="opacity-80">Patrik Kühnen</p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-[#fff]">Fotos Copyright:</h3>
                <p className="opacity-80">
                  HomeHeader - Goran Nitschke/Brauer PhotosBMW Open, Wilson und Keynote - Getty
                  ImagesSky - Robinson - Detlef WeyermannsBMW Open - Goran Nitschke/Brauer
                  PhotosWilson - Getty ImagesSky - Keynote - Hamburger Abendblatt/Roland
                  MaguniaRobinson - Detlef WeyermannsBecome a partner - Paul Zimmer Profil - Uschi
                  Irani
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="mx-auto w-full max-w-[1300px] px-4 pb-16 text-white xl:px-5 2xl:px-0">
              <h2 className="text-[2rem] font-medium">Disclaimer</h2>
              <div className="mt-8">
                <h3 className="font-bold text-[#fff]">Streitschlichtung</h3>
                <p className="opacity-80">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-[#fff]">Haftung für Inhalte</h3>
                <p className="opacity-80">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                  als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                  rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
                  der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
                  unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                  Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
                  entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-[#fff]">Haftung für Links</h3>
                <p className="opacity-80">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                  keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                  Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
                  zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                  Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                  inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                  einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                  werden wir derartige Links umgehend entfernen.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-[#fff]">Urheberrecht</h3>
                <p className="opacity-80">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                  Gebrauch gestattet.Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                  erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
                  Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                  Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
                  Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
                  umgehend entfernen.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default impressum;
