'use client';

import { Box } from '@chakra-ui/react';
import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

import { MainSectionElement, MainSectionProps, SectionsRef } from '@/containers/main/MainSection/types';

const MainSection = forwardRef(({ children }: MainSectionProps, ref: ForwardedRef<MainSectionElement>) => {
  const baseRef = useRef<HTMLDivElement>(null);

  const sectionsRef = useRef<SectionsRef>({
    currentIndex: 0,
    sections: [],
  });

  const scrollNext = () => {
    if (sectionsRef.current.currentIndex < sectionsRef.current.sections.length - 1) {
      const nextIndex = sectionsRef.current.currentIndex + 1;
      sectionsRef.current.currentIndex = nextIndex;
      sectionsRef.current.sections[nextIndex]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (sectionsRef.current.currentIndex > 0) {
      const prevIndex = sectionsRef.current.currentIndex - 1;
      sectionsRef.current.currentIndex = prevIndex;
      sectionsRef.current.sections[prevIndex]?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  useImperativeHandle(ref, () => ({
    scrollNext: () => scrollNext(),
    scrollPrev: () => scrollPrev(),
    ...(baseRef.current as HTMLDivElement),
  }));

  useEffect(() => {
    const mouseDown = (clickEvent: MouseEvent) => {
      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        const deltaY = moveEvent.pageY - clickEvent.pageY;
        if (deltaY > 0) {
          scrollNext();
        } else if (deltaY < 0) {
          scrollPrev();
        }
      };

      const mouseUpHandler = () => {
        document.removeEventListener('mousemove', mouseMoveHandler);
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler, { once: true });
    };

    const widthChange = () => {
      const prevIndex = sectionsRef.current.currentIndex;
      sectionsRef.current.currentIndex = prevIndex;
      sectionsRef.current.sections[prevIndex]?.scrollIntoView({ block: 'end' });
    };

    window.addEventListener('resize', widthChange);
    widthChange();

    const mainSection = document.getElementById('main_section');
    mainSection?.scrollTo(0, 0);
    mainSection?.addEventListener(
      'wheel',
      (e: WheelEvent) => {
        e.preventDefault();
        if (e.deltaY > 0 && sectionsRef.current.currentIndex < sectionsRef.current.sections.length - 1) {
          scrollNext();
        } else if (e.deltaY < 0 && sectionsRef.current.currentIndex > 0) {
          scrollPrev();
        }
      },
      { passive: false },
    );
    window.addEventListener('mousedown', mouseDown);

    return () => {
      mainSection?.removeEventListener('wheel', () => {});
      window.removeEventListener('resize', widthChange);
    };
  }, []);

  return (
    <Box className="scroll_hide" ref={baseRef} overflow="auto" w="100%" h="100vh" id="main_section">
      {children.map((child) => (
        <Box key={child?.key} ref={(el) => sectionsRef.current.sections.push(el)}>
          {child}
        </Box>
      ))}
    </Box>
  );
});

export default MainSection;
