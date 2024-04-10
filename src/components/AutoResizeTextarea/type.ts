export interface AutoResizeTextareaProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  LeftIconButton?: React.ReactElement;
  RightIconButton?: React.ReactElement;
}
