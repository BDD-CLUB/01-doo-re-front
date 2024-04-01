export interface StyledRadioGroupProps {
  title?: string;
  name?: string;
  onChange?: (value: string) => void;
  w?: string | number;
  defaultValue?: string;
  value?: string;
  children: JSX.Element[];
}
