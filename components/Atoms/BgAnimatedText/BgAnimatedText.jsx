import { fontAktivGrotesk } from '@/components/Atoms/BgAnimatedText/style.module.css';
import { useScroll, animated, useInView } from '@react-spring/web';
import { useEffect, useState } from 'react';

const BgAnimatedText = ({ className, backward, fullText, dark }) => {
  const [ref, inView] = useInView();

  const [scrollYProgress, setScrollYProgress] = useState(0);
  useScroll({
    onChange: ({ value: { scrollYProgress } }) => setScrollYProgress(scrollYProgress)
  });

  useEffect(() => {
    console.log(inView);
  })

  return (
    <animated.div
      ref={ref}
      className={`whitespace-nowrap text-9xl font-extrabold uppercase flex leading-none will-change-transform md:text-[13rem] ${fontAktivGrotesk} ${className}`}
      style={
        inView
          ? {
              transform: `translateX(${
                backward ? scrollYProgress * -500 : scrollYProgress * 500 - 1500
              }px)`
            }
          : {}
      }>
      {fullText.map(({ text, outline }, i) => (
        <span
          key={i}
          className={
            dark
              ? outline
                ? 'text-outline-white/30'
                : 'text-white/30'
              : outline
              ? 'text-outline-iron'
              : 'text-iron'
          }>
          {text}&nbsp;
        </span>
      ))}
    </animated.div>
  );
};

export default BgAnimatedText;
