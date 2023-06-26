import React, {type FC, memo} from 'react';

import styles from './NotFound.module.css';

const NotFound: FC = () => {
    return (
        <main className={styles.container}>
            <h1>404</h1>
            <p>Я.Пипка</p>
        </main>
    );
};

export default memo(NotFound);
