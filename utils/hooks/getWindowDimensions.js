import { useIsomorphicLayoutEffect } from '@react-spring/web';
import { useState } from 'react';

const useWindowDimensions = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) updateSize();
    });
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export default useWindowDimensions;
