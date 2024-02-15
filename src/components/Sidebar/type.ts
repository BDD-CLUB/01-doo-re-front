export interface CategoryButtonProps {
  path: string;
  text: string;
  isSelected: boolean;
  isTeam: boolean;
  isTeamMatch: boolean;
}

export interface SidebarIconButtonProps {
  icon: React.ReactElement;
  onClick: () => void;
}

export interface CategoryProps {
  id: number;
  name: string;
  subCategory: { id: number; name: string }[];
}
