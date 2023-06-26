import {type FC} from 'react';

type QA = {
  label: string;
  description: string;
  isOpen: boolean;
  onClick: ()=>void
}
export type Props = FC<QA>
