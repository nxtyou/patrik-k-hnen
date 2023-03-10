import Image from 'next/image';
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
      <Image priority={true} src="/images/logo.svg" alt="Patrick kühnen" width="184" height="29" />
      <nav className="hidden items-center space-x-3 md:flex">
        <a href="#">
          <EnvelopeIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
        <a href="#">
          <InstagramIcon />
        </a>
        <a href="#">
          <LinkedinIcon />
        </a>
        <a href="#">
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
