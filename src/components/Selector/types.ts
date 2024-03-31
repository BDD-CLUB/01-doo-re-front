export interface SelectorProps {
  selected: string | undefined;
  label: string[];
  handleSelector: (data: string) => void;
}
