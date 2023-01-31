import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const HoverVideo = ({ style, className, poster, width, height, src, muted, loop, sizes }) => {
  const [hover, setHover] = useState(false);
  const videoRef = useRef();

  const toggleVideoOnHover = () => {
    if (hover) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    toggleVideoOnHover();
  });

  return (
    <div
      className="relative"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Image
        className={`relative z-10 transition-all duration-500 ${
          hover ? 'invisible opacity-0' : 'visible opacity-100'
        } ${className || ''}`}
        src={poster}
        width="596"
        height="335"
        alt=""
        sizes={sizes}
      />
      <video
        style={style}
        className={`absolute top-0 left-0 h-full w-full object-cover ${hover ? '' : 'hidden'}`}
        ref={videoRef}
        width={width}
        height={height}
        muted={muted}
        loop={loop}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default HoverVideo;
