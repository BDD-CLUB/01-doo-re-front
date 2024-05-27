export interface SelectorProps {
  placeholder?: string;
  selected: string;
  label: string[];
  handleSelector: (data: string) => void;
  handleClose?: () => void;
}
