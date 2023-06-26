import {type FC} from 'react';

type Film = {
  genre: string;
  yearOfRelease: number;
  rating: number;
  director: string;
}
export type Props = FC<Film>
