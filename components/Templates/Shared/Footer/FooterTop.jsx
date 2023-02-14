import ButtonLink from '@/components/Atoms/ButtonLink';
import ArrowIcon from '@/components/Atoms/Icons/ArrowIcon';
import Link from 'next/link';
import BasicLink from '../../../Atoms/BasicLink';
import InstagramIcon from '../../../Atoms/Icons/InstagramIcon';
import LinkedinIcon from '../../../Atoms/Icons/LinkedinIcon';
import TwitterIcon from '../../../Atoms/Icons/TwitterIcon';

const FooterTop = () => {
  return (
    <div className="relative">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        <div className="footer-right-column-bg flex items-center bg-prussian-blue py-32 px-6 sm:px-8 md:px-20 lg:w-1/2 lg:py-0 lg:before:block 2xl:px-0">
          <div className="relative z-10 ">
            <header className="font-poppins font-medium">
              <div className="text-2xl !leading-none xl:text-3xl ">Hey there</div>
              <div className="flex h-20 space-x-3 overflow-hidden text-4xl !leading-[5rem] lg:space-x-4 xl:text-5xl">
                <div className="whitespace-nowrap">Let&apos;s talk</div>
                <div className="overflow-hidden">
                  <div className="text-outline-white carousel">
                    <span className="block">Sports</span>
                    <span className="block">Creativity</span>
                    <span className="block">Digital</span>
                    <span className="block">Sports</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="md:mt-4">
              <p className="text-white/80 md:text-xl">Ich freue mich auf deine Nachricht. </p>
            </div>

            <ButtonLink href="/contact" className="group mt-12" rightIcon={<ArrowIcon animated />}>
              Kontakt aufnehmen
            </ButtonLink>
          </div>
        </div>
        <div className="2xl:grid-row-2 grid max-w-sm grid-cols-1 px-6 py-16 text-lg sm:px-8 md:pl-20 lg:w-1/2 lg:py-28 2xl:max-w-none 2xl:grid-cols-2 2xl:pb-32">
          <div>
            <h2 className="text-sm font-semibold uppercase">WEBSEITE</h2>
            <ul className="mt-4 text-white/80">
              <li className="leading-9">
                <Link href="/">Home</Link>
              </li>
              <li className="leading-9">
                <Link href="/contact">Kontakt</Link>
              </li>
            </ul>
            <div className="mt-7">
              <BasicLink href="/contact">Mehr erfahren</BasicLink>
            </div>
          </div>
          <div className="order-4 mt-10 2xl:order-[inherit] 2xl:mt-0 ">
            <h2 className="text-sm font-semibold uppercase">Über patrik kühnen</h2>
            <ul className="mt-4 text-white/80">
              <li className="leading-9">
                <Link href="/bmw-open">Turnierdirektor</Link>
              </li>
              <li className="leading-9">
                <Link href="/keynote-speaker">Keynote Speaker</Link>
              </li>
              <li className="leading-9">
                <Link href="/sky-tennis">Tennisexperte</Link>
              </li>
              <li className="leading-9">
                <Link href="/top-event-coach">Coach</Link>
              </li>
            </ul>
            <div className="mt-7">
              <BasicLink href="/contact">Mehr erfahren</BasicLink>
            </div>
          </div>
          <div className="mt-10 2xl:mt-12">
            <h2 className="text-sm font-semibold uppercase">Hier Kontakt aufnahmen</h2>
            <ul className="mt-4">
              <li className="leading-9">
                <a href="tel:+123123456789">(+123) 123 456 789</a>
              </li>
              <li className="leading-9">
                <a href="mailto:pk-contact@patrikkuehnen.com">pk-contact@patrikkuehnen.com</a>
              </li>
            </ul>
          </div>
          <div className="mt-10 2xl:mt-12">
            <h2 className="text-sm font-semibold uppercase">Socials</h2>
            <ul className="mt-4 flex space-x-2">
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
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
