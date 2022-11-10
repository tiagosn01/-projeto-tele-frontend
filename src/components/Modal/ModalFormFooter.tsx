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
    <footer>
      <Button>Fechar</Button>
      <Button>Salvar</Button>
    </footer>
  );
}
