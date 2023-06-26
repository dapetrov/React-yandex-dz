import React, {FC, memo} from 'react';
import {Link} from 'react-router-dom';

import styles from './Footer.module.css';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <Link to="/questionanswers">Вопросы-ответы</Link>
            <Link to="/about">О нас</Link>
        </footer>
    );
};

export default memo(Footer);
