import { useInView, animated, useSpring } from '@react-spring/web';
import Button from '../Atoms/Button';
import ArrowIcon from '../Atoms/Icons/ArrowIcon';

//

const ClientsCard = ({ srcSet, imgSrc, className }) => {
  const [ref, isInView] = useInView();

  const styles = useSpring({
    opacity: isInView ? 1 : 0,
    delay: 100,
    config: {
      duration: 1000
    }
  });

  return (
    <div className={`clients__item ${className}`}>
      <picture>
        <source type="image/png" srcSet={srcSet} />
        <animated.img
          ref={ref}
          style={styles}
          className="clients__image aos-init aos-animate transition-end"
          src={imgSrc}
          width={132}
          height={88}
          alt="Ziggo sport logo"
          data-aos="fade"
        />
      </picture>
    </div>
  );
};

const Clients = () => {
  const cards = [
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/agu-logo.png?v=1661416352 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/agu-logo.png?v=1661416352 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/agu-logo.png?v=1661416352 3x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/agu-logo.png?v=1661416352'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/asics-logo.png?v=1661416333 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/asics-logo.png?v=1661416333 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/asics-logo.png?v=1661416334 3x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/asics-logo.png?v=1661416333'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/atletiekunie-logo.png?v=1661416331 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/atletiekunie-logo.png?v=1661416332 2x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/atletiekunie-logo.png?v=1661416331'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/eredivisie-logo.png?v=1661416350 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/eredivisie-logo.png?v=1661416350 2x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/eredivisie-logo.png?v=1661416350'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/espn-logo.png?v=1661416348 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/espn-logo.png?v=1661416348 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/espn-logo.png?v=1661416349 3x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/espn-logo.png?v=1661416348'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/Gorillas-logo.png?v=1661417904 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/Gorillas-logo.png?v=1661417904 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/Gorillas-logo.png?v=1661417904 3x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/Gorillas-logo.png?v=1661417904'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/johan-cruijff-arena-logo.png?v=1661416347 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/johan-cruijff-arena-logo.png?v=1661416347 2x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/johan-cruijff-arena-logo.png?v=1661416347'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/johan-cruyff-foundation-logo.png?v=1661416346 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/johan-cruyff-foundation-logo.png?v=1661416347 2x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/johan-cruyff-foundation-logo.png?v=1661416346'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/circuit-zandvoort-logo.png?v=1661416350 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/circuit-zandvoort-logo.png?v=1661416351 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/circuit-zandvoort-logo.png?v=1661416351 3x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/circuit-zandvoort-logo.png?v=1661416350'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/Nationale-Nederlanden-logo.png?v=1661418784 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/Nationale-Nederlanden-logo.png?v=1661418784 2x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/Nationale-Nederlanden-logo.png?v=1661418784'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/nosnsf-logo.png?v=1661416343 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/nosnsf-logo.png?v=1661416344 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/nosnsf-logo.png?v=1661416344 3x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/nosnsf-logo.png?v=1661416343'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/psv-logo.png?v=1661416342 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/psv-logo.png?v=1661416342 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/psv-logo.png?v=1661416342 3x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/psv-logo.png?v=1661416342'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/puma-logo.png?v=1661416341 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/puma-logo.png?v=1661416341 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/puma-logo.png?v=1661416341 3x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/puma-logo.png?v=1661416341'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/rancingnews365-logo.png?v=1661416339 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/rancingnews365-logo.png?v=1661416339 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/rancingnews365-logo.png?v=1661416340 3x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/rancingnews365-logo.png?v=1661416339'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/shell-logo.png?v=1661416338 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/shell-logo.png?v=1661416339 2x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/shell-logo.png?v=1661416338'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/swapfiets-logo.png?v=1661416332 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/swapfiets-logo.png?v=1661416332 2x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/swapfiets-logo.png?v=1661416332'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1661416330 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1661416330 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1661416331 3x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1661416330'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/uefa-logo.png?v=1661416337 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/uefa-logo.png?v=1661416337 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/uefa-logo.png?v=1661416337 3x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/uefa-logo.png?v=1661416337'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/visma-logo.png?v=1661416334 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/visma-logo.png?v=1661416335 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/visma-logo.png?v=1661416335 3x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/visma-logo.png?v=1661416334'
    },
    {
      srcSet:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/ziggo-sport-logo.png?v=1661416336 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/ziggo-sport-logo.png?v=1661416336 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/ziggo-sport-logo.png?v=1661416336 3x',
      imgSrc:
        'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/ziggo-sport-logo.png?v=1661416336'
    }
  ];
  return (
    <section className="content-gradient content-gradient--bottom-right relative bg-black py-20 px-6 text-white sm:px-8 md:py-28 md:px-16 xl:px-28">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
        <h2 className="max-w-2xl text-center font-poppins text-3xl font-medium leading-snug md:text-5xl">
          “Mit den richtigen Partnern ist alles möglich”
        </h2>
        <div className="mt-4 grid w-full grid-cols-3 grid-rows-6 border-r border-b border-white/10 md:mt-28 md:grid-cols-4 md:grid-rows-5 lg:grid-cols-5 lg:grid-rows-4">
          {cards.map(({ srcSet, imgSrc }, i) => (
            <ClientsCard
              key={i}
              srcSet={srcSet}
              imgSrc={imgSrc}
              className={
                i === cards.length - 1 || i === cards.length - 2 ? '!hidden  md:!flex' : ''
              }
            />
          ))}
        </div>
        <Button className="mt-16 md:mt-24" rightIcon={<ArrowIcon />}>
          Kontakt aufnehmen
        </Button>
      </div>
    </section>
  );
};

export default Clients;
