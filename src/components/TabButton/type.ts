import { TabButtonInfoType } from '@/types';

export interface TabButtonProps {
  currentTab: string;
  changeTab: (tab: string) => void;
  categoryInfos: TabButtonInfoType[];
}
