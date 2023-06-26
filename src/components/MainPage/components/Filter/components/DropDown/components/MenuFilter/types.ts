import {OptionType} from '../../types';

type MenuFilter = {
  list: {
      label: string;
      value: string;
  }[];
  onSelect: (value: OptionType) => void; 
}

export type Props = MenuFilter