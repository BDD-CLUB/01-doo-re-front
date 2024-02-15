import { ReactElement } from 'react';

export interface MainSectionProps {
  children: ReactElement[];
}

export interface MainSectionRef {
  currentIndex: number;
  sections: (HTMLElement | null)[];
}
