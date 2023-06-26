import {Film} from '../../types/Film';

export async function getMovie(movieId: string):Promise<Film>{
    const response = await fetch(`http://localhost:3001/api/movie?movieId=${movieId}`);

    return await response.json();
}
