import { Button, Modal } from 'antd';
import React, { useState } from 'react';

interface ModalWrapperProps {
  content: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
  title?: any;
  submit?: () => void;
  // size: 'sm' | 'md' | 'lg';
}

export function ModalWrapper({
  content,
  isOpen,
  toggle,
  // size,
  submit,
  title,
}: ModalWrapperProps) {
  return (
    <Modal
      title={title}
      centered
      open={isOpen}
      onOk={submit}
      onCancel={toggle}
      okText="Salvar"
      width="90%"
      bodyStyle={{ minHeight: 400 }}
      // footer={submit ? undefined : [null]}
    >
      {content}
    </Modal>
  );
}
