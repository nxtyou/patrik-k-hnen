import Image from 'next/image';
import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';

const ReferencesCard = ({ logo, cta, title, bg, label, isParentInView }) => {
  const [isBgVisible, setIsBgVisible] = useState(false);

  const clipPath = isParentInView ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)';

  const containerStyles = useSpring({
    clipPath: clipPath,
    delay: 400,
    config: {
      duration: 400
    },
    onRest: () => {
      setIsBgVisible(false);
    }
  });

  const imgStyles = useSpring({
    scale: isParentInView ? 1 : 1.2,
    delay: 300,
    config: {
      duration: 400
    }
  });
  const bgStyles = useSpring({
    clipPath: clipPath,
    config: {
      duration: 300
    },
    onStart: () => {
      setIsBgVisible(true);
    }
  });

  return (
    <div className="relative">
      <animated.div className="group relative z-50" style={containerStyles}>
        <div className="absolute top-12 left-6 z-20 rounded-[0.2rem] bg-white/10 py-1.5 px-3 text-xs font-medium uppercase tracking-widest">
          {label}
        </div>
        <div className="absolute left-6 bottom-12 z-20 transition-all duration-700 group-hover:bottom-16">
          <div>
            <img src={logo.imgSrc} width={logo.width} height={logo.height} alt="" />
          </div>
          <h3 className="mt-6 text-2xl font-semibold uppercase">{title}</h3>
          <div className="mt-8 text-xs font-medium">{cta}</div>
        </div>

        <animated.div className="relative z-10" style={imgStyles}>
          {/* <Image className="w-full" src={bg} alt="" width="334" height="502" /> */}
          <animated.video
            className="w-full object-cover"
            width="334"
            height="502"
            muted
            loop
            poster={bg}
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}>
            <source src="/video.mp4" type="video/mp4" />
          </animated.video>
        </animated.div>
      </animated.div>
      <animated.div
        style={bgStyles}
        className={`absolute top-0 left-0 h-full w-full ${
          isBgVisible ? 'bg-prussian-blue' : ''
        }`}></animated.div>
    </div>
  );
};

export default ReferencesCard;
