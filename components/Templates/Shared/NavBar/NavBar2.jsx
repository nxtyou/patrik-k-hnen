import ButtonLink from '@/components/Atoms/ButtonLink';
import ArrowIcon from '@/components/Atoms/Icons/ArrowIcon';
import MenuIcon from '@/components/Atoms/Icons/MenuIcon';

import Link from 'next/link';
import { useState } from 'react';

const NavBar2 = ({ ctaText, ctaTarget }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-[100] flex w-full items-center justify-between px-6 py-6 sm:px-8 md:px-16">
      <Link aria-label="Gehen Sie zur Homepage" href="/">
        <img src="/images/logo-mini.svg" width="62" height="50" alt="" />
      </Link>
      <ButtonLink
        href={ctaTarget}
        aria-label={ctaText}
        className="group hidden md:flex"
        rightIcon={<ArrowIcon animated />}
        big>
        {ctaText}
      </ButtonLink>
      <button
        aria-label="Menü umschalten"
        className="md:hidden"
        onClick={() => {
          setToggled(true);
        }}>
        <MenuIcon />
      </button>
      <nav
        className={`${
          toggled ? 'translate-x-0' : 'translate-x-full'
        } gradient fixed top-0 right-0 bottom-0 transition-all duration-300`}>
        <div className="relative flex h-full flex-col justify-between px-7 pt-16 pb-8">
          <button
            className={`${toggled ? '' : 'hidden'} burgerMenuClose`}
            onClick={() => {
              setToggled(false);
            }}></button>
          <ul className="flex flex-col gap-4 font-poppins text-2xl font-medium">
            <li>
              <Link href="/" className="transition-all hover:text-iron">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/keynote-speaker" className="transition-all hover:text-iron">
                KEYNOTE
              </Link>
            </li>
            <li>
              <Link href="/top-event-coach" className="transition-all hover:text-iron">
                EVENT COACH
              </Link>
            </li>
            <li>
              <Link href="/sky-tennis" className="transition-all hover:text-iron">
                EXPERTE
              </Link>
            </li>
            <li>
              <Link href="/bmw-open" className="transition-all hover:text-iron">
                DIREKTOR
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-all hover:text-iron">
                CONTACT
              </Link>
            </li>
          </ul>
          <ButtonLink
            href="/contact"
            aria-label="Jetzt Gespräch buchen"
            className="group mt-6 hidden md:flex"
            rightIcon={<ArrowIcon animated />}
            big>
            Jetzt Gespräch buchen
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar2;
