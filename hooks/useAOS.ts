import Aos from 'aos';
import { useEffect } from 'react';

export const useAos = (options?: Aos.AosOptions) => {
  useEffect(() => {
    Aos.init({ duration: 700, easing: 'ease-out-cubic', once: true, ...options });
  }, [options]);
};
