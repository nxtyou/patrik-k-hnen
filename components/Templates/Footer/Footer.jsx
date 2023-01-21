import BasicLink from '../../Atoms/BasicLink';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

const Footer = () => {
  return (
    <footer className="bg-black  text-white ">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
