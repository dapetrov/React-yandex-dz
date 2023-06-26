import React, {memo} from 'react';
import ReactDOM from 'react-dom';

import DeleteButtonModal from '../DeleteWindow/components/DeleteButtonModal';

import styles from './DeleteWindow.module.css';
import {Props} from './types';



const DeleteWindow: Props = ({onClose, onDelete}) => {
    const handleModalClose = () => {
        onClose();
    };
    
    const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            handleModalClose();
        }
    };

    const handleDelete = () => {
        onDelete();
        handleModalClose();
    };

    return ReactDOM.createPortal(
        <div className={styles.wrapper} onClick={handleWrapperClick}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3>Удаление билета</h3>
                    <DeleteButtonModal onClick={() => handleModalClose()}/>
                </div>
                <p className={styles.p}>Вы уверены, что хотите удалить билет?</p>
                <button className={styles.buttonYes} onClick={handleDelete}>Да</button>
                <button className={styles.buttonNo} onClick={handleModalClose}>Нет</button>
            </div>
        </div>,
    document.getElementById('modal-root')!,
    );
};

export default memo(DeleteWindow);