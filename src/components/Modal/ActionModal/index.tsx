import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { BsXLg } from 'react-icons/bs';

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
  size,
  isNoFooter,
  hasCloseButton = false,
}: ActionModalProps) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size={size || 'md'}>
      <ModalOverlay />
      <ModalContent rounded="2xl">
        <Flex align="center" justify="space-between" direction="row" px="4" pt="4">
          <Text textStyle="bold_2xl" cursor="default">
            {title}
          </Text>
          {hasCloseButton && (
            <IconButton
              w="8"
              minW="unset"
              h="8"
              bg="transparent"
              _hover={{ background: 'transparent' }}
              aria-label="모달 닫기"
              icon={<BsXLg />}
              onClick={onClose}
            />
          )}
        </Flex>
        <ModalBody p="4">{children}</ModalBody>
        {!isNoFooter && (
          <ModalFooter justifyContent="end" gap="4" pt="0" pb="4">
            <Button onClick={onSubButtonClick} variant="white">
              {subButtonText}
            </Button>
            <Button onClick={onMainButtonClick} variant="orange">
              {mainButtonText}
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ActionModal;
