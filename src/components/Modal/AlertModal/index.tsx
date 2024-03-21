import { Modal, ModalOverlay, ModalContent, ModalBody, Flex, ModalCloseButton } from '@chakra-ui/react';

import { AlertModalProps } from '../types';

const AlertModal = ({ isOpen, onClose, title, children }: AlertModalProps) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent rounded="2xl">
        <Flex
          textStyle="bold_2xl"
          align="center"
          justify="center"
          h="12"
          textColor="white"
          bg="orange"
          borderTopRightRadius="2xl"
          borderTopLeftRadius="2xl"
        >
          {title}
        </Flex>
        <ModalCloseButton color="white" size="md" />

        <ModalBody p="4">
          <Flex align="center" justify="center" minH="24">
            {children}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AlertModal;
