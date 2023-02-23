import BasicLink from '@/components/Atoms/BasicLink';

const FooterBottom = () => {
  return (
    <div className="border-t border-t-[#202133] py-7 px-6 text-sm sm:px-8 md:px-20 2xl:px-0">
      <div className=" mx-auto flex max-w-7xl flex-col-reverse items-center justify-between md:flex-row">
        <div className="mt-3 md:mt-0">© NXTYOU 2022.</div>
        <ul className="flex flex-col-reverse items-center md:flex-row md:space-x-4">
          <li className="mt-3 md:mt-0">
            <BasicLink href="/privacy-policy">Datenschutzerklärung</BasicLink>
          </li>
          <li>
            <BasicLink href="/impressum">Impressum</BasicLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterBottom;
