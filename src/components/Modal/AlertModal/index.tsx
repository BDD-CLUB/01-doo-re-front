import { Text, Modal, ModalOverlay, ModalContent, ModalBody, Flex, ModalCloseButton } from '@chakra-ui/react';

import { AlertModalProps } from '../types';

const AlertModal = ({ isOpen, onClose, title, children }: AlertModalProps) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent overflow="hidden" rounded="2xl">
        <Text textStyle="bold_2xl" h="12" textColor="white" lineHeight="48px" textAlign="center" bg="orange">
          {title}
        </Text>
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
