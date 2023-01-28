import { fontAktivGrotesk } from '@/components/Atoms/BgAnimatedText/style.module.css';
import { useScroll, animated, useInView } from '@react-spring/web';
import { useState } from 'react';

const BgAnimatedText = ({ className, backward, fullText, dark }) => {
  const [ref, inView] = useInView();

  const [scrollYProgress, setScrollYProgress] = useState(0);
  useScroll({
    onChange: ({ value: { scrollYProgress } }) => setScrollYProgress(scrollYProgress)
  });

  return (
    <animated.div
      ref={ref}
      className={`flex whitespace-nowrap text-9xl font-extrabold uppercase leading-none will-change-transform md:text-[13rem] ${fontAktivGrotesk} ${className}`}
      style={
        inView
          ? {
              transform: `translateX(${
                backward ? scrollYProgress * -1000 : scrollYProgress * 1000 - 800
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
