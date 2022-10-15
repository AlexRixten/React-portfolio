import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

export const useUrl = () => {
  const location = useLocation();

  const [url, setUrl] = useState({
    base: '',
    full: '',
  });

  useEffect(() => {
    const { origin, href, pathname } = window.location;

    setUrl({
      base: `${origin}${pathname}`,
      full: href,
    });
  }, [location.pathname]);

  return url;
};
