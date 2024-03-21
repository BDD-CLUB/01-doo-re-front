export interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  subButtonText: string;
  onSubButtonClick: () => void;
  mainButtonText: string;
  onMainButtonClick: () => void;
}

export interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
