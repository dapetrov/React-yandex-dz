import React, {memo} from 'react';

import DownIcon from '../../../DownIcon';
import UpIcon from '../../../UpIcon';

import styles from './QuestionAnswersBlock.module.css';
import {Props} from './types';

const QuestionAnswersBlock: Props = ({label, description, isOpen, onClick}) => {
    const handleClick = () => {
        onClick();
    };
  
    return (
        <div className={styles.container}>
            <button onClick={handleClick}>
                <span>{label}</span>
                {isOpen ? <UpIcon/> : <DownIcon/>}
            </button>
            {isOpen && <p>{description}</p>}
        </div>
    );
};
  
export default memo(QuestionAnswersBlock);