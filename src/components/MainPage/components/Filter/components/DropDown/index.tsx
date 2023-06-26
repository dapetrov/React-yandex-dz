import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {useSearchParams} from 'react-router-dom';

import DownIcon from '../../../../../DownIcon';
import UpIcon from '../../../../../UpIcon';
import {genresRu} from '../../consts';

import FilterDeleteButton from './components/FilterDeleteButton';
import MenuFilter from './components/MenuFilter';
import styles from './DropDown.module.css';
import {OptionType, Props} from './types';

const DropDown: Props = ({label, buttonlabel, dropdownlist, isOpen, onToggle}) => {
    const labelRef = useRef<HTMLLabelElement>(null);

    const [selectedValue, setSelectedValue] = useState<OptionType | null>(null);

    const [search, setSearch] = useSearchParams();

    useEffect(() => {
        const value = search.get(label);
        const option = {
            label: value ? genresRu[value] : '',
            value: search.get(label) || '',
        };

        if (!selectedValue && option.value) {
            setSelectedValue(option);
        }
    }, [label, search, selectedValue]);

    const handleSelect = useCallback(
        (value: OptionType) => {
            let newSearch = {};

            for (const [key, value] of Array.from(search.entries())) {
                newSearch = {
                    ...newSearch,
                    [key]: value,
                };
            }
            setSearch({
                ...newSearch,
                [label]: value.value,
            });

            setSelectedValue(value);
            onToggle();
        },
        [label, search, setSearch, onToggle],
    );

    const handleClear = useCallback(() => {
        let newSearch = {};

        for (const [key, value] of Array.from(search.entries())) {
            newSearch = {
                ...newSearch,
                [key]: value,
            };
        }
        setSearch({
            ...newSearch,
            [label]: '',
        });

        setSelectedValue(null);
    }, [label, search, setSearch]);

    return (
        <label ref={labelRef} className={styles.label}>
            {label}
            <fieldset>
                <input
                    className={isOpen ? styles.dropDownButton_open : styles.dropDownButton_closed}
                    onClick={onToggle}
                    placeholder={buttonlabel}
                    readOnly
                    value={selectedValue?.label || ''}
                />
                {!!selectedValue && <FilterDeleteButton handleClear={handleClear}/>}
                {isOpen ? (
                    <UpIcon className={styles.icon} height={20} width={20} color="#999fa6"/>
                ) : (
                    <DownIcon className={styles.icon} height={20} widht={20} color="#999fa6"/>
                )}
            </fieldset>
            {isOpen && labelRef.current && createPortal(<MenuFilter list={dropdownlist} onSelect={handleSelect}/>, labelRef.current)}
        </label>
    );
};

export default memo(DropDown);