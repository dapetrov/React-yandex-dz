import React, {memo} from 'react';
import {Link} from 'react-router-dom';

import {cartActions} from '../../reducers/Cart/index';
import {useAppDispatch, useAppSelector} from '../../reducers/hooks';
import {selectCartItems} from '../../selectors/cart';
import Control from '../Control';
import DeleteButton from '../DeleteButton';

import styles from './FilmCard.module.css';
import {Props} from './types';

const FilmCard : Props = ({closable, id, title, url, genre, onRemove}) =>{
    let genreRu;

    const items = useAppSelector(selectCartItems);
    const item = items.find(item=>item.id === id);

    const dispatch = useAppDispatch();

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

    const onClickUpFunc = ()=>{
        id && dispatch(cartActions.increment(id));
    };
    const onClickDownFunc = ()=>{
        id && dispatch(cartActions.decrement(id));
    };

    return(
        <div className={styles.container}>
            <img src={url}/>
            <div className={styles.containerTwo}>
                <div className={styles.textContainer}>
                    <Link to={`/film/${id}`}>{title}</Link>
                    <span>{genreRu}</span>
                </div>
                <div className={styles.controlDeleteWrap}>
                    <Control onClickDown={onClickDownFunc} onClickUp={onClickUpFunc} defaultValue={item?.count}/>
                    {closable && onRemove && <DeleteButton onDelete = {onRemove}/>}
                </div>
            </div>
        </div>
    );
};

export default memo(FilmCard);