import React, {FC, memo, useState} from 'react';

import QuestionAnswersBlock from './components/QuestionAnswersBlock';
import styles from './QuestionAnswers.module.css';

const QuestionAnswers: FC = () => {
    const [activeBlock, setActiveBlock] = useState<number | null>(null);

    const handleBlockClick = (blockIndex: number) => {
        if (activeBlock === blockIndex) {
            setActiveBlock(null);
        } else {
            setActiveBlock(blockIndex);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>Вопросы ответы</div>
            <QuestionAnswersBlock
                label="Что такое Билетопоиск?"
                description="Мы — крупнейший сервис о кино в рунете.
                 На нем вы сможете посмотреть фильмы и сериалы, купить
                  билеты в кино, узнать рейтинги популярных видео и
                   интересные факты, поставить фильмам оценки, написать
                    рецензии и дополнить описание фильмов."
                isOpen={activeBlock === 0}
                onClick={() => handleBlockClick(0)}
            />
            <QuestionAnswersBlock
                label="Какой компании принадлежит Билетопоиск?"
                description="Мы — крупнейший сервис о кино в рунете.
                 На нем вы сможете посмотреть фильмы и сериалы, купить
                  билеты в кино, узнать рейтинги популярных видео и
                   интересные факты, поставить фильмам оценки, написать
                    рецензии и дополнить описание фильмов."
                isOpen={activeBlock === 1}
                onClick={() => handleBlockClick(1)}
            />
            <QuestionAnswersBlock
                label="Как купить билет на Билетопоиск?"
                description="Мы — крупнейший сервис о кино в рунете.
                 На нем вы сможете посмотреть фильмы и сериалы, купить
                  билеты в кино, узнать рейтинги популярных видео и
                   интересные факты, поставить фильмам оценки, написать
                    рецензии и дополнить описание фильмов."
                isOpen={activeBlock === 2}
                onClick={() => handleBlockClick(2)}
            />
            <QuestionAnswersBlock
                label="Как оставить отзыв на Билетопоиск?"
                description="Мы — крупнейший сервис о кино в рунете.
                 На нем вы сможете посмотреть фильмы и сериалы, купить
                  билеты в кино, узнать рейтинги популярных видео и
                   интересные факты, поставить фильмам оценки, написать
                    рецензии и дополнить описание фильмов."
                isOpen={activeBlock === 3}
                onClick={() => handleBlockClick(3)}
            />
        </div>
    );
};

export default memo(QuestionAnswers);