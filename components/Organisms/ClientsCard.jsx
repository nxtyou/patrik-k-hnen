import { useInView, animated, useSpring } from '@react-spring/web';

const ClientsCard = ({ srcSet, imgSrc, className }) => {
  const [ref, isInView] = useInView({
    once: true
  });

  const styles = useSpring({
    opacity: isInView ? 1 : 0,
    delay: 100,
    config: {
      duration: 1000
    }
  });

  return (
    <div
      className={`flex w-full items-center justify-center border-l border-t border-white/10 py-6 px-4 hover:bg-white/5 hover:transition-all hover:duration-500 md:py-8 md:px-4 ${className}`}>
      <picture>
        <source type="image/png" srcSet={srcSet} />
        <animated.img
          ref={ref}
          style={styles}
          className="clients__image h-12 w-[4.5rem] object-contain md:h-[4.5rem] md:w-[7.5rem]"
          src={imgSrc}
          width={132}
          height={88}
          alt=""
        />
      </picture>
    </div>
  );
};

export default ClientsCard;
