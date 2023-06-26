import {FC} from 'react';

type DropDownProps = {
  label:string, 
  buttonlabel:string, 
  dropdownlist: OptionType[],
  isOpen: boolean,
  onToggle: ()=>void
}

export type Props = FC<DropDownProps>

export type OptionType = {
  label: string;
  value: string;
}


