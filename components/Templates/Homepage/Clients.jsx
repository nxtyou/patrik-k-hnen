import ButtonLink from '@/components/Atoms/ButtonLink';
import ArrowIcon from '../../Atoms/Icons/ArrowIcon';
import ClientsCard from '../../Organisms/ClientsCard';

const Clients = () => {
  //   const cards = [
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/agu-logo.png?v=1661416352 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/agu-logo.png?v=1661416352 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/agu-logo.png?v=1661416352 3x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/agu-logo.png?v=1661416352',
  //       alt: 'agu logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/asics-logo.png?v=1661416333 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/asics-logo.png?v=1661416333 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/asics-logo.png?v=1661416334 3x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/asics-logo.png?v=1661416333',
  //       alt: 'asics logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/atletiekunie-logo.png?v=1661416331 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/atletiekunie-logo.png?v=1661416332 2x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/atletiekunie-logo.png?v=1661416331',
  //       alt: 'atletiekunie logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/eredivisie-logo.png?v=1661416350 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/eredivisie-logo.png?v=1661416350 2x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/eredivisie-logo.png?v=1661416350',
  //       alt: 'eredivisie logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/espn-logo.png?v=1661416348 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/espn-logo.png?v=1661416348 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/espn-logo.png?v=1661416349 3x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/espn-logo.png?v=1661416348',
  //       alt: 'espn logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/Gorillas-logo.png?v=1661417904 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/Gorillas-logo.png?v=1661417904 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/Gorillas-logo.png?v=1661417904 3x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/Gorillas-logo.png?v=1661417904',
  //       alt: 'gorillas logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/johan-cruijff-arena-logo.png?v=1661416347 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/johan-cruijff-arena-logo.png?v=1661416347 2x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/johan-cruijff-arena-logo.png?v=1661416347',
  //       alt: 'johan cruijff arena logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/johan-cruyff-foundation-logo.png?v=1661416346 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/johan-cruyff-foundation-logo.png?v=1661416347 2x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/johan-cruyff-foundation-logo.png?v=1661416346',
  //       alt: 'johan cruyff foundation logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/circuit-zandvoort-logo.png?v=1661416350 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/circuit-zandvoort-logo.png?v=1661416351 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/circuit-zandvoort-logo.png?v=1661416351 3x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/circuit-zandvoort-logo.png?v=1661416350',
  //       alt: 'circuit zandvoort logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/Nationale-Nederlanden-logo.png?v=1661418784 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/Nationale-Nederlanden-logo.png?v=1661418784 2x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/Nationale-Nederlanden-logo.png?v=1661418784',
  //       alt: 'nationale nederlanden logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/nosnsf-logo.png?v=1661416343 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/nosnsf-logo.png?v=1661416344 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/nosnsf-logo.png?v=1661416344 3x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/nosnsf-logo.png?v=1661416343',
  //       alt: 'noc nsf logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/psv-logo.png?v=1661416342 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/psv-logo.png?v=1661416342 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/psv-logo.png?v=1661416342 3x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/psv-logo.png?v=1661416342',
  //       alt: 'psv logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/puma-logo.png?v=1661416341 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/puma-logo.png?v=1661416341 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/puma-logo.png?v=1661416341 3x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/puma-logo.png?v=1661416341',
  //       alt: 'puma logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/rancingnews365-logo.png?v=1661416339 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/rancingnews365-logo.png?v=1661416339 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/rancingnews365-logo.png?v=1661416340 3x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/rancingnews365-logo.png?v=1661416339',
  //       alt: 'racing news 365 logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/shell-logo.png?v=1661416338 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/shell-logo.png?v=1661416339 2x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/shell-logo.png?v=1661416338',
  //       alt: 'shell logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/swapfiets-logo.png?v=1661416332 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/swapfiets-logo.png?v=1661416332 2x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/swapfiets-logo.png?v=1661416332',
  //       alt: 'swapfiets logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1661416330 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1661416330 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1661416331 3x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/team-jumbo-visma-logo.png?v=1661416330',
  //       alt: 'team jumbo visma logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/uefa-logo.png?v=1661416337 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/uefa-logo.png?v=1661416337 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/uefa-logo.png?v=1661416337 3x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/uefa-logo.png?v=1661416337',
  //       alt: 'uefa logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/visma-logo.png?v=1661416334 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/visma-logo.png?v=1661416335 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/visma-logo.png?v=1661416335 3x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/visma-logo.png?v=1661416334',
  //       alt: 'visma logo'
  //     },
  //     {
  //       srcSet:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/ziggo-sport-logo.png?v=1661416336 1x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_264x176_fit_center-center_85_none/ziggo-sport-logo.png?v=1661416336 2x, https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_396x264_fit_center-center_85_none/ziggo-sport-logo.png?v=1661416336 3x',
  //       imgSrc:
  //         'https://dvy7d3tlxdpkf.cloudfront.net/tde-nl/_transforms/Klant-logos/_198x132_fit_center-center_85_none/ziggo-sport-logo.png?v=1661416336',
  //       alt: 'ziggo sport logo'
  //     }
  //   ];

  const cards = [
    {
      srcSet: '',
      imgSrc: '/images/logos/tennis-point.svg',
      width: 228,
      alt: 'tennis point logo'
    },
    {
      srcSet: '',
      imgSrc: '/images/logos/bmw-american-express.png',
      width: 144,
      alt: 'bmw by american express logo'
    },
    {
      srcSet: '',
      imgSrc: '/images/logos/robinson.svg',
      width: 162,
      alt: 'robinson logo'
    },
    {
      srcSet: '',
      imgSrc: '/images/logos/wilson.svg',
      width: 160,
      alt: 'wilson logo'
    },
    {
      srcSet: '',
      imgSrc: '/images/logos/bmw.svg',
      width: 80,
      alt: 'bmw logo'
    },
    {
      srcSet: '',
      imgSrc: '/images/logos/sky.svg',
      width: 108,
      alt: 'sky logo'
    },
    {
      srcSet: '',
      imgSrc: '/images/logos/enjoy-your-game.svg',
      width: 110,
      alt: 'enjoy your game logo'
    },
    {
      srcSet: '',
      imgSrc: '/images/logos/davis-cup.svg',
      width: 183,
      alt: 'davis cup logo'
    }
  ];
  return (
    <section className="content-gradient content-gradient--bottom-right relative bg-black py-20 px-6 text-white sm:px-8 md:py-28 md:px-16 xl:px-28">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
        <h2 className="max-w-2xl text-center text-3xl font-medium leading-snug md:text-5xl">
          “Mit den richtigen Partnern ist alles möglich”
        </h2>
        <div className="mt-4 grid w-full grid-cols-2 grid-rows-2 border-r border-b border-white/10 md:mt-28 md:grid-cols-4">
          {cards.map(({ srcSet, imgSrc, width, alt }, i) => (
            <ClientsCard
              key={i}
              srcSet={srcSet}
              imgSrc={imgSrc}
              width={width}
              className={
                i === cards.length - 1 || i === cards.length - 2 ? '!hidden  md:!flex' : ''
              }
              alt={alt}
            />
          ))}
        </div>
        <ButtonLink href="/contact" className="mt-16 md:mt-24" rightIcon={<ArrowIcon />}>
          Kontakt aufnehmen
        </ButtonLink>
      </div>
    </section>
  );
};

export default Clients;
