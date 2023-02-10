import Link from 'next/link';
import EnvelopeIcon from '../../../Atoms/Icons/EnvelopeIcon';
import FacebookIcon from '../../../Atoms/Icons/FacebookIcon';
import InstagramIcon from '../../../Atoms/Icons/InstagramIcon';
import LinkedinIcon from '../../../Atoms/Icons/LinkedinIcon';
import MenuIcon from '../../../Atoms/Icons/MenuIcon';
import TreeofIcon from '../../../Atoms/Icons/TreeofIcon';
import TwitterIcon from '../../../Atoms/Icons/TwitterIcon';

const NavBar = () => {
  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center justify-between p-6 lg:pr-12">
      <Link href="/">
        <img src="/images/logo.svg" alt="Patrick kühnen" width="184" height="29" />
      </Link>
      <nav className="hidden items-center space-x-3 md:flex">
        <a href="mailto:pk-contact@patrikkuehnen.com">
          <EnvelopeIcon />
        </a>
        <a href="https://twitter.com/patrikkuehnen">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/patrikkuehnen/">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/patrik-kuehnen-2928961b9">
          <LinkedinIcon />
        </a>
        <a href="https://www.facebook.com/people/Patrik-Kuehnen/100052890943964/">
          <FacebookIcon />
        </a>
        <a href="#">
          <TreeofIcon />
        </a>
      </nav>
      <button aria-label="Menü umschalten" className="md:hidden">
        <MenuIcon />
      </button>
    </header>
  );
};

export default NavBar;
