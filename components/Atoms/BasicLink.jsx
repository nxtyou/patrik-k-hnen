import Link from 'next/link';

const BasicLink = ({ children, href, target }) => {
  return (
    <Link target={target} className={`link-underline relative`} href={href}>
      {children}
    </Link>
  );
};

export default BasicLink;
