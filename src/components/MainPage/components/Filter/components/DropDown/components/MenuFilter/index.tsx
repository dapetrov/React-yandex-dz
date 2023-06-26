import React, {memo} from 'react';

import styles from './MenuFilter.module.css';
import {Props} from './types';

const MenuFilter = ({list, onSelect}: Props) => {

    return (
        <div className={styles.container}>
            {list.map((item, index) => {
                return <button key={index} className={styles.button} onClick={() => onSelect(item)}>{item.label}</button>;
            })}
        </div>
    );
};

export default memo(MenuFilter);