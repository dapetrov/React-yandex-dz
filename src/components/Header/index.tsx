import React, {type FC, memo} from 'react';
import {Link} from 'react-router-dom';

import {useAppSelector} from '../../reducers/hooks';
import {selectCartItems} from '../../selectors/cart';

import CartIcon from './components/CartIcon';
import styles from './Header.module.css';

const Footer: FC = () => {

    const cartItems = useAppSelector(selectCartItems);
    
    return (
        <header className={styles.header}>
            <Link to="/">
                <h1>Билетопоиск</h1>
            </Link>
            <Link className={styles.link} to="cart">
                
                { cartItems.length !== 0 ? (
                    <div className={styles.cartItemsBlock}>
                        {cartItems.length}
                    </div>
                ) : ''
                }
                <CartIcon/>
               
            </Link>
        </header>
    );
};

export default memo(Footer);
