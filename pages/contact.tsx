import InstagramIcon from '@/components/Atoms/Icons/InstagramIcon';
import LinkedinIcon from '@/components/Atoms/Icons/LinkedinIcon';
import MenuIcon from '@/components/Atoms/Icons/MenuIcon';
import TwitterIcon from '@/components/Atoms/Icons/TwitterIcon';
import FooterBottom from '@/components/Templates/Shared/Footer/FooterBottom';
import Image from 'next/image';
import Link from 'next/link';
import EnvelopeIcon from '@/components/Atoms/Icons/EnvelopeIcon';
import FacebookIcon from '@/components/Atoms/Icons/FacebookIcon';
import TreeofIcon from '@/components/Atoms/Icons/TreeofIcon';

function Contact() {
  return (
    <>
      <header>
        <div className="flex items-center justify-between px-7 py-7 md:px-8 md:py-5">
          <Link href="/">
            <picture>
              <source
                srcSet="/images/logo.svg"
                media="(min-width: 768px)"
                width="184"
                height="29"
              />
              <Image src="/images/logo-mini.svg" width="62" height="50" alt="" />
            </picture>
          </Link>
          <button aria-label="Menü umschalten" className="md:hidden">
            <MenuIcon />
          </button>
          <nav className="hidden md:block">
            <ul className="flex gap-4">
              <li>
                <a href="#" target="_blank">
                  <EnvelopeIcon />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <LinkedinIcon />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <TreeofIcon />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="gradient pb-36 ">
        <section className="mx-auto w-full max-w-[1300px] px-4 pt-6 lg:pt-20 xl:px-0 xl:pt-28">
          <div className="flex flex-col gap-20 lg:flex-row lg:justify-between lg:gap-0">
            <div className="xl:max-w-xl">
              <header>
                <h1 className="text-2xl font-bold sm:text-4xl lg:text-7xl">CONTACT ME!</h1>
                <p className="pt-3 pb-10 text-lg opacity-80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                  velit interdum, ac aliquet odio mattis. 🙂
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
                <button className="mt-9 rounded-3xl bg-white px-5 py-3 font-medium text-black transition-all hover:bg-iron">
                  Lorem Ipsum
                </button>
              </form>
            </div>
            <div className="contact-info">
              <div>
                <h6>Lorem ipsum</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, at.</p>
                <a href="#" target="_blank">
                  Lorem ipsum
                </a>
              </div>
              <div className="lg:order-3">
                <h6>Lorem ipsum dolor</h6>
                <ul>
                  <li>
                    <a href="mailto:Lorem@gmail.com">Lorem@gmail.com</a>
                  </li>
                  <li>
                    <a href="tel:+31407820001">(+31) 040 782 00 01</a>
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
                      href="https://www.instagram.com/tde_nl/"
                      target="_blank">
                      <InstagramIcon className="h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Besuchen Sie die Linkedin-Seite"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-prussian-blue hover:bg-prussian-blue/80"
                      href="https://nl.linkedin.com/company/tdenl"
                      target="_blank">
                      <LinkedinIcon className="h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Besuchen Sie die Twitter-Seite"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-prussian-blue hover:bg-prussian-blue/80"
                      href="https://twitter.com/tde"
                      target="_blank">
                      <TwitterIcon className="h-4 w-4" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="lg:order-2">
                <h6>Lorem ipsum dolor sit amet</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                  velit.
                </p>
                <a href="#" target="_blank">
                  Lorem ipsum
                </a>
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
