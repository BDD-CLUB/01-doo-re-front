export interface IconBoxProps {
  leftIcon: React.ReactElement;
  content: string;
  rightIcon?: React.ReactElement;
  handleClick?: () => void;
  cursor?: React.CSSProperties['cursor'];
}
