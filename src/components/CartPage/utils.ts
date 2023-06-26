import {Film} from '../../types/Film';

import {CartItem} from './types';

export async function getMovies(): Promise<Film[]> {
    const response = await fetch('http://localhost:3001/api/movies');

    return await response.json();
}

export async function getCartMovies(CartItems: CartItem[]) {
    const selectedMovieIds = CartItems.map(item => item.id);
    const allMovies = await getMovies();
  
    const visibleMovies = allMovies.filter(movie =>
        selectedMovieIds.includes(movie.id),
    );
  
    return visibleMovies;
}