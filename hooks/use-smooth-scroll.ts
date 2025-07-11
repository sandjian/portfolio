import { useCallback } from 'react';

type ScrollBehavior = 'auto' | 'smooth';
type ScrollBlock = 'start' | 'center' | 'end' | 'nearest';

interface ScrollOptions {
  behavior?: ScrollBehavior;
  block?: ScrollBlock;
}

export function useSmoothScroll(options?: ScrollOptions) {
  const scrollToElement = useCallback((
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();

    const currentOptions: ScrollOptions = {
      behavior: 'smooth',
      block: 'start',
      ...options, 
    };

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView(currentOptions);
    }
  }, [options]); 

  return scrollToElement;
}