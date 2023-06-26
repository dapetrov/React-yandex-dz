import cn from 'classnames';
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';

import styles from './Control.module.css';
import {Props} from './types';

const limitMin = 0;
const limitMax = 30;

const Control:Props= ({onClickDown,onClickUp, defaultValue})=>{
    const [count, setCount] = useState<number>(defaultValue||0);
    
    useEffect(() => {
        console.info(defaultValue);
        if(defaultValue){
            setCount(defaultValue);
        }
    }, [defaultValue]);


    const changeCount = useCallback((isDown:boolean)=>{
        setCount(prev => {
            const limit = isDown ? limitMin : limitMax;

            if(prev === limit){
                return prev;
            }
            return isDown ? prev - 1 : prev + 1;
        });
    }, []);

    const onClickUpFunc = ()=>{
        changeCount(false);
        onClickUp();
    };
    const onClickDownFunc = ()=>{
        changeCount(true);
        onClickDown();
    };

    const controlStyleUp = useMemo(() => {
        return cn(styles.button, {
            [styles.button_active]: count !== limitMax ,
            [styles.button_disabled]: count === limitMax,
        }); 
    },[count]);

    const controlStyleDown = useMemo(() => {
        return cn(styles.button, {
            [styles.button_active]: count !== limitMin,
            [styles.button_disabled]: count === limitMin,
        }); 
    },[count]);

    return(
        <div className={styles.container}>
            <button className={controlStyleDown} onClick={onClickDownFunc}>-</button>
            {count}
            <button className={controlStyleUp} onClick={onClickUpFunc}>+</button>
        </div>
    );
};

export default memo(Control);