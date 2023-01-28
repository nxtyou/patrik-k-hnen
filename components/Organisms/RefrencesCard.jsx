import Image from 'next/image';
import { animated, useSpring } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

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

  const [hover, setHover] = useState(false);

  const videoRef = useRef(null);

  const toggleVideoOnHover = () => {
    if (hover) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    console.log(hover);
    toggleVideoOnHover();
  });

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative">
      <animated.div className="group relative z-50" style={containerStyles}>
        <div className="absolute top-12 left-6 z-20 rounded-[0.2rem] bg-white/10 py-1.5 px-3 text-xs font-medium uppercase tracking-widest">
          {label}
        </div>
        <div className="absolute left-6 bottom-12 z-20 transition-all duration-700 group-hover:bottom-16">
          <div>
            <img src={logo.imgSrc} width={logo.width} height={logo.height} alt="" />
          </div>
          <h3 className="mt-6 text-2xl font-medium uppercase">{title}</h3>
          <div className="mt-8 text-xs font-medium uppercase">{cta}</div>
        </div>

        <video
          ref={videoRef}
          className="absolute top-0 left-0 z-10 h-full w-full object-cover"
          width="334"
          height="502"
          muted
          loop
          poster={bg}>
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
        <animated.div className="relative z-10" style={imgStyles}>
          <Image
            className={`w-full transition-all duration-500 ${hover ? 'invisible opacity-0' : 'visible opacity-100'}`}
            src={bg}
            alt=""
            width="334"
            height="502"
          />
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
