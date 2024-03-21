import { Text, Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, Button } from '@chakra-ui/react';

import { ActionModalProps } from '../types';

const ActionModal = ({
  isOpen,
  onClose,
  title,
  children,
  subButtonText,
  onSubButtonClick,
  mainButtonText,
  onMainButtonClick,
}: ActionModalProps) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent rounded="2xl">
        <Text textStyle="bold_2xl" px="4" pt="4">
          {title}
        </Text>
        <ModalBody p="4">{children}</ModalBody>
        <ModalFooter justifyContent="end" gap="4" pt="0" pb="4">
          <Button onClick={onSubButtonClick} variant="white">
            {subButtonText}
          </Button>
          <Button onClick={onMainButtonClick} variant="orange">
            {mainButtonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ActionModal;
