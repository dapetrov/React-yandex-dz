import {FC} from 'react';

type ControlProps = {
  onClickUp: ()=>void;
  onClickDown: ()=>void;
  defaultValue?: number;
}
export type Props = FC<ControlProps>;