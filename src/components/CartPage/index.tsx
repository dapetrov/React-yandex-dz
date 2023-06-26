import React, {FC, memo, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {cartActions} from '../../reducers/Cart/index';
import {useAppSelector} from '../../reducers/hooks';
import {selectCartItems} from '../../selectors/cart';
import {Film} from '../../types/Film';
import FilmCard from '../FilmCard';

import styles from './CartPage.module.css';
import {getCartMovies} from './utils';

const CartPage : FC = () => {
    const cartItems = useAppSelector(selectCartItems);
    const dispatch = useDispatch();
    
    const handleRemoveItem = (itemId: string) => {
        dispatch(cartActions.remove(itemId));
    };

    const [movies, setMovies] = useState<Film[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const visibleMovies = await getCartMovies(cartItems);

            setMovies(visibleMovies);
        };
  
        fetchMovies();
    }, [cartItems]);
    
    const total = cartItems.reduce((acc, item)=>{
        return acc += item.count;
        
    }, 0);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {movies.map(item => (
                    <FilmCard 
                        id={item.id} 
                        key={item.id} 
                        title={item.title} 
                        url={item.posterUrl}
                        genre={item.genre}
                        closable={true}
                        onRemove={()=> handleRemoveItem(item.id)}
                    />
                ))}
            </div>
            <div className={styles.result}>
                <span>Итого билетов:</span>
                <span>{total}</span>
            </div>
        </div>
    );
};

export default memo(CartPage);