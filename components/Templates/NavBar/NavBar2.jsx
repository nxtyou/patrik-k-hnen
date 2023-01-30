import Button from '@/components/Atoms/Button';
import ArrowIcon from '@/components/Atoms/Icons/ArrowIcon';
import MenuIcon from '@/components/Atoms/Icons/MenuIcon';

const NavBar2 = () => {
  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center justify-between px-6 py-6 sm:px-8 md:px-16">
      <img src="/images/logo-mini.svg" width="62" height="50" alt="" />
      <Button
        aria-label="Mehr Informationen"
        className="mt-6 hidden md:flex"
        rightIcon={<ArrowIcon />}
        big>
        Mehr Informationen
      </Button>
      <button aria-label="Menü umschalten" className="md:hidden">
        <MenuIcon />
      </button>
    </header>
  );
};

export default NavBar2;
