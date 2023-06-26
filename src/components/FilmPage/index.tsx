import React, {FC, memo, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';


import {cartActions} from '../../reducers/Cart/index';
import {useAppDispatch, useAppSelector} from '../../reducers/hooks';
import {selectCartItems} from '../../selectors/cart';
import {Film} from '../../types/Film';
import Control from '../Control';

import Comment from './components/Comment';
import styles from './FilmPage.module.css';
import {getMovie} from './utils';

const FilmPage: FC = () => {
    const [film, setFilm] = useState<Film | null>(null);
    const params = useParams();

    const dispatch = useAppDispatch();

    const items = useAppSelector(selectCartItems);

    useEffect(()=>{
        if(params.id)  {
            getMovie(params.id).then(result=>setFilm(result));
        }
    },[params.id]);

    if(film === null){
        return(
            <span className={styles.spinner}/>
        );
    }

    const {director,genre,rating,releaseYear,description, posterUrl, title, id} = film;

    const item = items.find(item=>item.id === id);

    let genreRu;

    const onClickUpFunc = ()=>{
        id && dispatch(cartActions.increment(id));
    };
    const onClickDownFunc = ()=>{
        id && dispatch(cartActions.decrement(id));
    };

    switch(genre) {
        case 'horror':  
            genreRu = 'Хоррор'; 
            break;
        case 'fantasy':  
            genreRu = 'Фэнтези';
            break;
        case 'comedy':  
            genreRu = 'Комедия';
            break;
        case 'action':  
            genreRu = 'Боевик';
            break;
        default:
            genreRu=genre;
            break;
    } 

    return(
        <>  
            <div className={styles.container}>
                <img src={posterUrl}/>
                <div className={styles.filmContainer}>      
                    <div className={styles.header}>
                        <h2>{title}</h2>
                        <Control onClickDown={onClickDownFunc} onClickUp={onClickUpFunc} defaultValue={item?.count}/>
                    </div>      
                    <div className={styles.filmParam}>
                        <p><b>Жанр: </b>{genreRu}</p>
                        <p><b>Год выпуска: </b>{releaseYear}</p>
                        <p><b>Рейтинг: </b>{rating}</p>
                        <p><b>Режисер: </b>{director}</p>
                    </div>
                    <div className={styles.filmDescription}>
                        <h3>Описание</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className={styles.commentContainer}>
                <Comment movieId={params.id}/>
            </div>
        </>
    );
};

export default memo(FilmPage);