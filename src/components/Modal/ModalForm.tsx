import { Button, Modal } from 'antd';
import React, { useState } from 'react';

interface ModalFormProps {
  content: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
  title?: any;
  // size: 'sm' | 'md' | 'lg';
}

export function ModalForm({
  content,
  isOpen,
  toggle,
  // size,

  title,
}: ModalFormProps) {
  return (
    <Modal
      title={title}
      centered
      open={isOpen}
      onCancel={toggle}
      width="90%"
      bodyStyle={{ minHeight: 400 }}
      footer={null}
    >
      {content}
    </Modal>
  );
}
