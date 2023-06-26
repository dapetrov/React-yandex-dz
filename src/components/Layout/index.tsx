import React, {memo, type FC} from 'react';
import {Outlet} from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

import styles from './Layout.module.css';

const Layout: FC = () => {
    return (
        <>
            <Header/>
            <main className={styles.layout}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default memo(Layout);
