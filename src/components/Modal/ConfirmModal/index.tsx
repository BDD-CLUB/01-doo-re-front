import { Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, Button, Flex } from '@chakra-ui/react';

import { ConfirmModalProps } from '../types';

const ConfirmModal = ({
  isOpen,
  onClose,
  title,
  children,
  confirmButtonText,
  onConfirmButtonClick,
}: ConfirmModalProps) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent overflow="hidden" rounded="2xl">
        <Flex textStyle="bold_2xl" align="center" justify="center" h="12" textColor="white" bg="orange">
          {title}
        </Flex>
        <ModalBody p="4">
          <Flex align="center" justify="center" minH="20">
            {children}
          </Flex>
        </ModalBody>
        <ModalFooter justifyContent="center" gap="4" pt="0" pb="4">
          <Button onClick={onClose} variant="white">
            취소
          </Button>
          <Button onClick={onConfirmButtonClick} variant="orange">
            {confirmButtonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmModal;
