import {FC} from 'react';

type ModalProps = {
  onClose: () => void;
  onDelete: () => void;
}

export type Props = FC<ModalProps>