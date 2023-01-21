import Link from 'next/link';
import BasicLink from '../Atoms/BasicLink';

const Footer = () => {
  return (
    <footer className="bg-black py-8 px-6 text-white md:px-16 lg:px-32">
      <div className=" mx-auto flex max-w-7xl flex-col-reverse items-center justify-between md:flex-row">
        <div className="mt-4 md:mt-0">© NXTYOU 2022.</div>
        <ul className="flex flex-col-reverse items-center md:flex-row md:space-x-4">
          <li className="mt-4 md:mt-0">
            <BasicLink href="#">Datenschutzerklärung</BasicLink>
          </li>
          <li>
            <BasicLink href="#">Impressum</BasicLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
