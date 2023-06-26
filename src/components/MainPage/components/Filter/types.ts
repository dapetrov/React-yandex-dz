import {FC} from 'react';

type FilterProps = {
    onTitleChange: (value: string) => void;
}
export type Props = FC<FilterProps>