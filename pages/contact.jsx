import InstagramIcon from '@/components/Atoms/Icons/InstagramIcon';
import LinkedinIcon from '@/components/Atoms/Icons/LinkedinIcon';
import TwitterIcon from '@/components/Atoms/Icons/TwitterIcon';
import FooterBottom from '@/components/Templates/Shared/Footer/FooterBottom';

import NavBar2 from '@/components/Templates/Shared/NavBar/NavBar2';
import Link from 'next/link';

function Contact() {
  return (
    <>
      <NavBar2 ctaText="Mehr Informationen" />
      <main className="gradient pb-36 ">
        <section className="mx-auto w-full max-w-[1300px] px-4 pt-40 xl:px-5 xl:pt-56 2xl:px-0">
          <div className="flex flex-col gap-20 lg:flex-row lg:justify-between lg:gap-0">
            <div className="xl:max-w-xl">
              <header>
                <h1 className="text-2xl font-bold sm:text-4xl lg:text-7xl">CONTACT ME!</h1>
                <p className="pt-3 pb-10 text-lg opacity-80">
                  Schreibe mir jetzt eine Nachricht um über spannende Projekte, Veranstaltungen und
                  Events zu sprechen!
                </p>
              </header>
              <form className="contact-form">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex-1">
                    <label htmlFor="">NAME*</label>
                    <input type="text" placeholder="Dein Name" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="">NACHNAME</label>
                    <input type="text" placeholder="Dein Nachname" />
                  </div>
                </div>
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="flex-1">
                    <label htmlFor="">BETREFF*</label>
                    <input type="text" placeholder="Worum geht es?" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="">E-MAIL*</label>
                    <input type="text" placeholder="Deine E-Mail" />
                  </div>
                </div>
                <div>
                  <label htmlFor="">NACHRICHT*</label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Deine Nachricht..."
                    className="min-h-[146px]"></textarea>
                </div>
                <button className="mt-9 rounded-3xl bg-white px-5 py-3 font-poppins font-medium text-black transition-all hover:bg-iron">
                  Bestätigen
                </button>
              </form>
            </div>
            <div className="contact-info">
              <div>
                <h6>Webseite</h6>
                <ul className="mb-4 flex flex-col gap-1">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/contact">Kontact</Link>
                  </li>
                </ul>

                <Link href="/contact" className="underline">
                  Mehr erfahren
                </Link>
              </div>
              <div className="lg:order-3">
                <h6>Hier Kontakt aufnehmen</h6>
                <ul className="flex flex-col gap-1">
                  <li>
                    <a href="mailto:pk-contact@patrikkuehnen.com">pk-contact@patrikkuehnen.com</a>
                  </li>
                  <li>
                    <a href="tel:+123123456789">(+123) 123 456 789</a>
                  </li>
                </ul>
              </div>
              <div className="lg:order-4">
                <h6>Socials</h6>
                <ul className="flex gap-3 sm:justify-center lg:justify-start">
                  <li>
                    <Link
                      aria-label="Besuchen Sie die Instagram-Seite"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-prussian-blue hover:bg-prussian-blue/80"
                      href="https://www.instagram.com/patrikkuehnen/"
                      target="_blank">
                      <InstagramIcon className="h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Besuchen Sie die Linkedin-Seite"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-prussian-blue hover:bg-prussian-blue/80"
                      href="https://www.linkedin.com/in/patrik-kuehnen-2928961b9"
                      target="_blank">
                      <LinkedinIcon className="h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Besuchen Sie die Twitter-Seite"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-prussian-blue hover:bg-prussian-blue/80"
                      href="https://twitter.com/patrikkuehnen"
                      target="_blank">
                      <TwitterIcon className="h-4 w-4" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="lg:order-2">
                <h6>Über patrik kühnen</h6>
                <ul className="mb-4 flex flex-col gap-1">
                  <li>
                    <Link href="/bmw-open">Turnierdirektor</Link>
                  </li>
                  <li>
                    <Link href="/keynote-speaker">Keynote Speaker</Link>
                  </li>
                  <li>
                    <Link href="/sky-tennis">Tennisexperte</Link>
                  </li>
                  <li>
                    <Link href="/top-event-coach">Coach</Link>
                  </li>
                </ul>
                <Link href="/contact" className="underline">
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <FooterBottom />
      </footer>
    </>
  );
}

export default Contact;
