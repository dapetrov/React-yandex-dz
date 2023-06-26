import {type FC} from 'react';

type FilmCard = {
  closable?: boolean;
  id?: string;
  title?: string;
  url?: string;
  genre: string;
  onRemove? : ()=> void;
}
export type Props = FC<FilmCard>
