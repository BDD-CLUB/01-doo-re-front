export interface SelectorProps {
  selected: string;
  label: string[];
  handleSelector: (data: string) => void;
  handleClose?: () => void;
}
