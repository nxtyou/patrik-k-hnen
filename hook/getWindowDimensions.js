import { useEffect, useState } from 'react';

const useWindowDimensions = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
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
