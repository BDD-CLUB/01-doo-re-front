import { Text, Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, Button, Flex } from '@chakra-ui/react';

import { ActionModalProps } from '../types';

const ActionModal = ({
  isOpen,
  needCloseButton = false,
  onClose,
  title,
  children,
  subButtonText,
  onSubButtonClick,
  mainButtonText,
  onMainButtonClick,
  size,
}: ActionModalProps) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size={size || 'md'}>
      <ModalOverlay />
      <ModalContent rounded="2xl">
        <Flex>
          <Text textStyle="bold_2xl" px="4" pt="4">
            {title}
          </Text>
          {needCloseButton && (
            <Text mx="5" mt="4" ml="auto" fontWeight="bold" cursor="pointer" onClick={onClose}>
              X
            </Text>
          )}
        </Flex>
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
