import {Film} from '../../types/Film';

export async function getMovies(): Promise<Film[]> {
    const response = await fetch('http://localhost:3001/api/movies');

    return await response.json();
}

export async function getMoviesByCinemas(id:string): Promise<Film[]> {
    const response = await fetch(`http://localhost:3001/api/movies?cinemaId=${id}`);

    return await response.json();
}

export async function getFilteredMovies(cinemaId:string,filterGenre:string,name:string){
    let movies; 

    if(cinemaId){
        movies = await getMoviesByCinemas(cinemaId);
    }else{
        movies = await getMovies();
    }

    return movies
        .filter(({genre})=>filterGenre? genre === filterGenre: true)
        .filter(({title})=>title.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
}