import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) return target.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
}
