import Link from 'next/link';

const BasicLink = ({ children, href }) => {
  return (
    <Link className="footer-bottom-link relative" href={href}>
      {children}
    </Link>
  );
};

export default BasicLink;
