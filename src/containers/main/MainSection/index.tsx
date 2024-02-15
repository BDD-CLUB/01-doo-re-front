'use client';

import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

import { MainSectionProps, MainSectionRef } from '@/containers/main/MainSection/types';

const MainSection = ({ children }: MainSectionProps) => {
  const sectionsRef = useRef<MainSectionRef>({
    currentIndex: 0,
    sections: [],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener(
      'wheel',
      (e: WheelEvent) => {
        if (e.deltaY > 0 && sectionsRef.current.currentIndex < sectionsRef.current.sections.length - 1) {
          const nextIndex = sectionsRef.current.currentIndex + 1;
          sectionsRef.current.currentIndex = nextIndex;
          sectionsRef.current.sections[nextIndex]?.scrollIntoView({ behavior: 'smooth' });
        } else if (e.deltaY < 0 && sectionsRef.current.currentIndex > 0) {
          const prevIndex = sectionsRef.current.currentIndex - 1;
          sectionsRef.current.currentIndex = prevIndex;
          sectionsRef.current.sections[prevIndex]?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      },
      { passive: false },
    );
    return () => {
      window.removeEventListener('wheel', () => {});
    };
  }, []);

  return (
    <Box overflow="hidden" w="100%" h="100vh">
      {children.map((child) => {
        return (
          <Box key={child?.key} ref={(el) => sectionsRef.current.sections.push(el)}>
            {child}
          </Box>
        );
      })}
    </Box>
  );
};

export default MainSection;
