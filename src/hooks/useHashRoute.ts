import { useEffect, useState } from 'react';
import type { Route } from '../types/route';
import { parseHash } from '../lib/router';

export function useHashRoute(): Route {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleChange);
    return () => window.removeEventListener('hashchange', handleChange);
  }, []);

  return parseHash(hash);
}
