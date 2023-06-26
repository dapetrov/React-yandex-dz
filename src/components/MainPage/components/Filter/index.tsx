import React, {memo, useEffect, useMemo, useState} from 'react';

import {Cinema} from '../../../../types/Cinema';
import {Film} from '../../../../types/Film';
import {getMovies} from '../../../MainPage/utils';

import DropDown from './components/DropDown';
import {genresRu} from './consts';
import styles from './Filter.module.css';
import {Props} from './types';

export async function getCinemas(): Promise<Cinema[]> {
    const response = await fetch('http://localhost:3001/api/cinemas');

    return await response.json();
}

const Filter: Props = ({onTitleChange}) => {
    const [movies, setMovies] = useState<Film[]>([]);
    const [cinemaList, setCinemaList] = useState<Cinema[]>([]);
    const [isGenreDropDownOpen, setIsGenreDropDownOpen] = useState(false);
    const [isCinemaDropDownOpen, setIsCinemaDropDownOpen] = useState(false);

    useEffect(() => {
        getMovies().then(result => setMovies(result));
    }, []);

    useEffect(() => {
        getCinemas().then(result => setCinemaList(result));
    }, []);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        onTitleChange(value);
    };

    const handleGenreDropDownToggle = () => {
        setIsGenreDropDownOpen(prevState => !prevState);
        setIsCinemaDropDownOpen(false);
    };

    const handleCinemaDropDownToggle = () => {
        setIsCinemaDropDownOpen(prevState => !prevState);
        setIsGenreDropDownOpen(false);
    };

    const cinemaOptions = cinemaList.map(item => ({
        label: item.name,
        value: item.id,
    }));

    const genresOptions = useMemo(() => {
        const genres = movies.map(({genre}) => genre);

        return Array.from(new Set(genres).values()).map(item => ({
            label: genresRu[item] || item,
            value: item,
        }));
    }, [movies]);

    return (
        <div className={styles.container}>
            <h3>Фильтр поиска</h3>
            <div className={styles.inputsContainer}>
                <label>
                    Название
                    <input
                        onChange={handleTitleChange}
                        placeholder="Введите название"
                    />
                </label>
                <DropDown
                    label="Жанр"
                    buttonlabel="Выберите жанр"
                    dropdownlist={genresOptions}
                    isOpen={isGenreDropDownOpen}
                    onToggle={handleGenreDropDownToggle}
                />
                <DropDown
                    label="Кинотеатр"
                    buttonlabel="Выберите кинотеатр"
                    dropdownlist={cinemaOptions}
                    isOpen={isCinemaDropDownOpen}
                    onToggle={handleCinemaDropDownToggle}
                />
            </div>
        </div>
    );
};

export default memo(Filter);