import { animated, easings, useInView, useSpring } from '@react-spring/web';
import { useEffect } from 'react';

const AwardsCard = ({
  isLightBlue,
  imgSrc,
  srcSet,
  alt,
  topText,
  middleText,
  bottomText,
  index,
  isParentInView
}) => {
  const [ref, isInView] = useInView({
    once: true
  });

  const animate = isInView || (window.innerWidth < 1280 && isParentInView);

  const styles = useSpring({
    clipPath: animate ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
    config: {
      duration: 300,
      easing: easings.linear
    }
  });

  const stylesInner = useSpring({
    opacity: animate ? 1 : 0,
    delay: 500,
    config: {
      duration: 500
    }
  });

  return (
    <animated.div
      ref={ref}
      style={styles}
      className={`swiper-slide !h-auto max-w-[17.5rem] ${
        isLightBlue ? 'bg-regal-blue' : 'bg-prussian-blue'
      } pt-14 pb-10 md:pt-20 ${index % 2 !== 0 ? 'xl:mt-16 xl:-mb-16' : ''}`}>
      <animated.div style={stylesInner} className="flex flex-col items-center text-center">
        <div styles={stylesInner}>
          <picture>
            <source type="image/png" srcSet={srcSet} />
            <img src={imgSrc} width={80} height={80} alt={alt} />
          </picture>
        </div>
        <div className="mt-6 flex flex-col items-center">
          <div className="text-sm">{topText}</div>
          <h3 className="mt-2 text-lg font-bold">{middleText}</h3>
          <div className="mt-2 flex flex-col items-center font-poppins text-sm font-medium leading-7">
            {bottomText &&
              bottomText.map((item, i2) => (
                <div className="" key={i2}>
                  {item}
                </div>
              ))}
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default AwardsCard;
