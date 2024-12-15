import { useState, useEffect } from 'react';
import _ from 'lodash';

const isServer = typeof window === 'undefined';

const getWindowDimensions = () => {
  const width = _.get(!isServer ? window : {}, 'innerWidth', null);
  const height = _.get(!isServer ? window : {}, 'innerHeight', null);

  return {
    width,
    height
  };
};

export default function useWindowDimensions() {
  const values = getWindowDimensions();
  const [windowDimensions, setWindowDimensions] = useState(values);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    if (!isServer) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }

    return null;
  }, []);

  return windowDimensions;
}
