import React, {memo, type FC, useState, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

import {Film} from '../../types/Film';
import FilmCard from '../FilmCard';

import Filter from './components/Filter';
import styles from './MainPage.module.css';
import {getFilteredMovies} from './utils';

const MainPage: FC = () => {
    const [search] = useSearchParams();
    const [movies, setMovies] = useState<Film[]>([]);
    const [filterTitle, setFilterTitle] = useState('');

    useEffect(()=>{
        getFilteredMovies(
            search.get('Кинотеатр') || '',
            search.get('Жанр') || '',
            filterTitle,
        ).then(result => setMovies(result));
    }, [filterTitle, search]);

    return (
        <div className={styles.container}>
            <Filter onTitleChange={setFilterTitle}/>
            <div className={styles.filmContainer}>
                {movies.map(item => (
                    <FilmCard 
                        id={item.id} 
                        key={item.id} 
                        title={item.title} 
                        url={item.posterUrl}
                        genre={item.genre}
                    />
                ))}
            </div>
        </div>
    );
};

export default memo(MainPage);
