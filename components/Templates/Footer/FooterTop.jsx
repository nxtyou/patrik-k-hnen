import Button from '@/components/Atoms/Button';
import ArrowIcon from '@/components/Atoms/Icons/ArrowIcon';
import Link from 'next/link';
import BasicLink from '../../Atoms/BasicLink';
import InstagramIcon from '../../Atoms/Icons/InstagramIcon';
import LinkedinIcon from '../../Atoms/Icons/LinkedinIcon';
import TwitterIcon from '../../Atoms/Icons/TwitterIcon';

const FooterTop = () => {
  return (
    <div className="relative">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        <div className="footer-right-column-bg flex items-center bg-prussian-blue py-32 px-6 sm:px-8 md:px-20 lg:w-1/2 lg:py-0 lg:before:block">
          <div className="relative z-10 ">
            <header className="font-poppins font-medium">
              <div className="text-2xl !leading-none xl:text-3xl ">Hey there</div>
              <div className="flex h-20 space-x-3 overflow-hidden text-4xl !leading-[5rem] lg:space-x-4 xl:text-5xl">
                <div>
                  <div>
                    <div className="whitespace-nowrap">Let&apos;s talk</div>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="text-outline-white carousel">
                    <span className="block">Sports</span>
                    <span className="block">Creativity</span>
                    <span className="block">Digital</span>
                    <span className="block">Sports</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="md:mt-4">
              <p className="md:text-xl">Ich freue mich auf deine Nachricht. </p>
            </div>

            <Button className="mt-12" Icon={<ArrowIcon />}>
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
        <div className="2xl:grid-row-2 grid max-w-sm grid-cols-1 px-6 py-16 text-lg sm:px-8 md:pl-20 lg:w-1/2 lg:py-28 2xl:max-w-none 2xl:grid-cols-2 2xl:pb-32">
          <div className="">
            <h4 className="font-poppins text-sm font-semibold uppercase">Lorem ipsum</h4>
            <ul className="mt-4 text-white/80">
              <li className="leading-9">Lorem ipsum</li>
              <li className="leading-9">Lorem ipsum dolor</li>
              <li className="leading-9">Lorem ipsum</li>
            </ul>
            <div className="mt-7">
              <BasicLink target="_blank" href="#">
                Lorem ipsum
              </BasicLink>
            </div>
          </div>
          <div className="order-4 mt-10 2xl:order-[inherit] 2xl:mt-0 ">
            <h4 className="font-poppins text-sm font-semibold uppercase">
              Lorem ipsum dolor sit amet
            </h4>
            <p className="mt-4 leading-9 text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit.
            </p>
            <div className="mt-7">
              <BasicLink target="_blank" href="#">
                Lorem ipsum
              </BasicLink>
            </div>
          </div>
          <div className="mt-10 2xl:mt-12">
            <h4 className="font-poppins text-sm font-semibold uppercase">Lorem ipsum dolor</h4>
            <ul className="mt-4">
              <li className="leading-9">
                <BasicLink href="mailto:Lorem@gmail.com" target="_blank">
                  Lorem@gmail.com
                </BasicLink>
              </li>
              <li className="leading-9">
                <BasicLink href="tel:+310407820001">(+123) 123 456 789</BasicLink>
              </li>
            </ul>
          </div>
          <div className="mt-10 2xl:mt-12">
            <h4 className="font-poppins text-sm font-semibold uppercase">Socials</h4>
            <ul className="mt-4 flex space-x-2">
              <li>
                <Link
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-prussian-blue hover:bg-prussian-blue/80"
                  href="https://www.instagram.com/tde_nl/"
                  target="_blank">
                  <InstagramIcon className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-prussian-blue hover:bg-prussian-blue/80"
                  href="https://nl.linkedin.com/company/tdenl"
                  target="_blank">
                  <LinkedinIcon className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-prussian-blue hover:bg-prussian-blue/80"
                  href="https://twitter.com/tde"
                  target="_blank">
                  <TwitterIcon className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
