'use client';

import { FC, ReactNode } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

interface MyModalProps {
  modalTitle: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const MyModal: FC<MyModalProps> = ({
  modalTitle,
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
