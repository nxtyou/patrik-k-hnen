import Button from '../Atoms/Button';
import ArrowIcon from '../Atoms/Icons/ArrowIcon';

const Clients = () => {
  return (
    <section className="content-gradient content-gradient--bottom-right relative bg-black py-20 md:py-28 px-6 text-white sm:px-8 md:px-16 xl:px-28">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
        <h2 className="max-w-2xl text-center font-poppins text-3xl font-medium leading-snug md:text-5xl">
          “Mit den richtigen Partnern ist alles möglich”
        </h2>
        <div className="mt-4 grid w-full grid-cols-3 grid-rows-6 border-r border-b border-white/10 md:mt-28 md:grid-cols-4 md:grid-rows-5 lg:grid-cols-5 lg:grid-rows-4">
          <a href="https://www.tde.nl/cases/ride-with-us/" className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/666/agu-logo.webp?v=1661416352 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/666/agu-logo.webp?v=1661416353 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/666/agu-logo.webp?v=1661416353 3x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/agu-logo.png?v=1661416352 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/agu-logo.png?v=1661416352 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/agu-logo.png?v=1661416352 3x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/agu-logo.png?v=1661416352"
                width={132}
                height={88}
                alt="AGU logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <div className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/667/asics-logo.webp?v=1661416334 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/667/asics-logo.webp?v=1661416334 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/667/asics-logo.webp?v=1661416334 3x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/asics-logo.png?v=1661416333 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/asics-logo.png?v=1661416333 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/asics-logo.png?v=1661416334 3x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/asics-logo.png?v=1661416333"
                width={132}
                height={88}
                alt="ASICS logo"
                data-aos="fade"
              />
            </picture>
          </div>
          <a href="https://www.tde.nl/cases/hardlopen-platform/" className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/668/atletiekunie-logo.webp?v=1661416332 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/668/atletiekunie-logo.webp?v=1661416332 2x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/atletiekunie-logo.png?v=1661416331 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/atletiekunie-logo.png?v=1661416332 2x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/atletiekunie-logo.png?v=1661416331"
                width={132}
                height={88}
                alt="Atletiekunie logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <a href="https://www.tde.nl/cases/eredivisie-platform/" className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/670/eredivisie-logo.webp?v=1661416350 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/670/eredivisie-logo.webp?v=1661416350 2x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/eredivisie-logo.png?v=1661416350 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/eredivisie-logo.png?v=1661416350 2x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/eredivisie-logo.png?v=1661416350"
                width={132}
                height={88}
                alt="Eredivisie logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <div className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/671/espn-logo.webp?v=1661416349 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/671/espn-logo.webp?v=1661416349 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/671/espn-logo.webp?v=1661416349 3x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/espn-logo.png?v=1661416348 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/espn-logo.png?v=1661416348 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/espn-logo.png?v=1661416349 3x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/espn-logo.png?v=1661416348"
                width={132}
                height={88}
                alt="ESPN logo"
                data-aos="fade"
              />
            </picture>
          </div>
          <a href="https://www.tde.nl/cases/freakin-fast/" className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/931/Gorillas-logo.webp?v=1661417904 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/931/Gorillas-logo.webp?v=1661417905 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/931/Gorillas-logo.webp?v=1661417905 3x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/Gorillas-logo.png?v=1661417904 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/Gorillas-logo.png?v=1661417904 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/Gorillas-logo.png?v=1661417904 3x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/Gorillas-logo.png?v=1661417904"
                width={132}
                height={88}
                alt="Gorillas logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <a href="https://www.tde.nl/cases/johancruijffarena-platform/" className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/672/johan-cruijff-arena-logo.webp?v=1661416348 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/672/johan-cruijff-arena-logo.webp?v=1661416348 2x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/johan-cruijff-arena-logo.png?v=1661416347 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/johan-cruijff-arena-logo.png?v=1661416347 2x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/johan-cruijff-arena-logo.png?v=1661416347"
                width={132}
                height={88}
                alt="Johan Cruijff Arena logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <a
            href="https://www.tde.nl/cases/cm-com-circuit-zandvoort-platform/"
            className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/669/circuit-zandvoort-logo.webp?v=1661416351 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/669/circuit-zandvoort-logo.webp?v=1661416351 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/669/circuit-zandvoort-logo.webp?v=1661416351 3x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/circuit-zandvoort-logo.png?v=1661416350 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/circuit-zandvoort-logo.png?v=1661416351 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/circuit-zandvoort-logo.png?v=1661416351 3x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/circuit-zandvoort-logo.png?v=1661416350"
                width={132}
                height={88}
                alt="Circuit Zandvoort logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <a
            href="https://www.tde.nl/cases/johancruyfffoundation-platform/"
            className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/673/johan-cruyff-foundation-logo.webp?v=1661416347 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/673/johan-cruyff-foundation-logo.webp?v=1661416347 2x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/johan-cruyff-foundation-logo.png?v=1661416346 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/johan-cruyff-foundation-logo.png?v=1661416347 2x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/johan-cruyff-foundation-logo.png?v=1661416346"
                width={132}
                height={88}
                alt="Johan Cruyff Foundation logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <a href="https://www.tde.nl/cases/hardloopsupporter/" className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/942/Nationale-Nederlanden-logo.webp?v=1661418784 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/942/Nationale-Nederlanden-logo.webp?v=1661418785 2x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/Nationale-Nederlanden-logo.png?v=1661418784 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/Nationale-Nederlanden-logo.png?v=1661418784 2x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/Nationale-Nederlanden-logo.png?v=1661418784"
                width={132}
                height={88}
                alt="Nationale Nederlanden logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <div className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/676/nosnsf-logo.webp?v=1661416344 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/676/nosnsf-logo.webp?v=1661416345 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/676/nosnsf-logo.webp?v=1661416345 3x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/nosnsf-logo.png?v=1661416343 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/nosnsf-logo.png?v=1661416344 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/nosnsf-logo.png?v=1661416344 3x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/nosnsf-logo.png?v=1661416343"
                width={132}
                height={88}
                alt="NOC*NSF logo"
                data-aos="fade"
              />
            </picture>
          </div>
          <a href="https://www.tde.nl/cases/psv-app/" className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/677/psv-logo.webp?v=1661416343 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/677/psv-logo.webp?v=1661416343 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/677/psv-logo.webp?v=1661416343 3x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/psv-logo.png?v=1661416342 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/psv-logo.png?v=1661416342 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/psv-logo.png?v=1661416342 3x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/psv-logo.png?v=1661416342"
                width={132}
                height={88}
                alt="PSV logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <a href="https://www.tde.nl/cases/stream-to-unlock/" className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/678/puma-logo.webp?v=1661416341 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/678/puma-logo.webp?v=1661416341 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/678/puma-logo.webp?v=1661416342 3x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/puma-logo.png?v=1661416341 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/puma-logo.png?v=1661416341 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/puma-logo.png?v=1661416341 3x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/puma-logo.png?v=1661416341"
                width={132}
                height={88}
                alt="PUMA logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <a href="https://www.tde.nl/cases/racingnews365-platform/" className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/679/rancingnews365-logo.webp?v=1661416340 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/679/rancingnews365-logo.webp?v=1661416340 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/679/rancingnews365-logo.webp?v=1661416340 3x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/rancingnews365-logo.png?v=1661416339 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/rancingnews365-logo.png?v=1661416339 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/rancingnews365-logo.png?v=1661416340 3x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/rancingnews365-logo.png?v=1661416339"
                width={132}
                height={88}
                alt="Rancingnews365 logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <div className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/680/shell-logo.webp?v=1661416339 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/680/shell-logo.webp?v=1661416339 2x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/shell-logo.png?v=1661416338 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/shell-logo.png?v=1661416339 2x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/shell-logo.png?v=1661416338"
                width={132}
                height={88}
                alt="Shell logo"
                data-aos="fade"
              />
            </picture>
          </div>
          <a href="https://www.tde.nl/cases/the-blue-tire/" className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/681/swapfiets-logo.webp?v=1661416333 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/681/swapfiets-logo.webp?v=1661416333 2x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/swapfiets-logo.png?v=1661416332 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/swapfiets-logo.png?v=1661416332 2x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/swapfiets-logo.png?v=1661416332"
                width={132}
                height={88}
                alt="Swapfiets logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <a href="https://www.tde.nl/cases/the-masterpiece/" className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/682/team-jumbo-visma-logo.webp?v=1661416331 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/682/team-jumbo-visma-logo.webp?v=1661416331 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/682/team-jumbo-visma-logo.webp?v=1661416331 3x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1661416330 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1661416330 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1661416331 3x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1661416330"
                width={132}
                height={88}
                alt="Team Jumbo-Visma logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <a href="https://www.tde.nl/cases/equal-game/" className="clients__item">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/683/uefa-logo.webp?v=1661416338 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/683/uefa-logo.webp?v=1661416338 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/683/uefa-logo.webp?v=1661416338 3x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/uefa-logo.png?v=1661416337 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/uefa-logo.png?v=1661416337 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/uefa-logo.png?v=1661416337 3x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/uefa-logo.png?v=1661416337"
                width={132}
                height={88}
                alt="Uefa logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <a
            href="https://www.tde.nl/cases/the-next-top-mechanic/"
            className="clients__item !hidden  md:!flex">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/684/visma-logo.webp?v=1661416335 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/684/visma-logo.webp?v=1661416335 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/684/visma-logo.webp?v=1661416335 3x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/visma-logo.png?v=1661416334 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/visma-logo.png?v=1661416335 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/visma-logo.png?v=1661416335 3x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/visma-logo.png?v=1661416334"
                width={132}
                height={88}
                alt="Visma logo"
                data-aos="fade"
              />
            </picture>
          </a>
          <a
            href="https://www.tde.nl/cases/ziggosport-platform/"
            className="clients__item !hidden  md:!flex">
            <picture>
              <source
                type="image/webp"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/685/ziggo-sport-logo.webp?v=1661416336 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/685/ziggo-sport-logo.webp?v=1661416336 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/685/ziggo-sport-logo.webp?v=1661416337 3x"
              />
              <source
                type="image/png"
                srcSet="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/ziggo-sport-logo.png?v=1661416336 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/ziggo-sport-logo.png?v=1661416336 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/ziggo-sport-logo.png?v=1661416336 3x"
              />
              <img
                className="clients__image aos-init aos-animate transition-end"
                src="https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/ziggo-sport-logo.png?v=1661416336"
                width={132}
                height={88}
                alt="Ziggo sport logo"
                data-aos="fade"
              />
            </picture>
          </a>
        </div>
        <Button className="mt-16 md:mt-24" rightIcon={<ArrowIcon />}>
          Kontakt aufnehmen
        </Button>
      </div>
    </section>
  );
};

export default Clients;
