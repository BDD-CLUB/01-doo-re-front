export interface StyledDatePickerProps {
  label: string;
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}
