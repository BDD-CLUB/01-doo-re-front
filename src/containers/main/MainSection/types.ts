import { ReactElement } from 'react';

export interface MainSectionProps {
  children: ReactElement[];
}

export interface MainSectionElement extends HTMLDivElement {
  scrollNext: () => void;
  scrollPrev: () => void;
}

export interface SectionsRef {
  currentIndex: number;
  sections: (HTMLElement | null)[];
}
