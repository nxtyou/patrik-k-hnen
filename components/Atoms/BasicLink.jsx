import Link from 'next/link';

const BasicLink = ({ children, href, target, className, underline = true }) => {
  return (
    <Link target={target} className={`${underline ? 'link-underline' : 'link-no-underline'} relative ${className || ''}`} href={href}>
      {children}
    </Link>
  );
};

export default BasicLink;
