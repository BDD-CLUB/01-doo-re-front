export interface IconBoxProps {
  leftIcon: React.ReactElement;
  content: string;
  rightIcon?: React.ReactElement | undefined;
  handleClick?: () => void | undefined;
}
