import React, {KeyboardEvent, KeyboardEventHandler, useEffect, useState} from 'react';
import {ItemType} from "../Accordion/Accordion";
import styles from './CustomSelect.module.css'

type CustomSelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

const CustomSelect: React.FC<CustomSelectPropsType> = (props) => {

    const {items, value, onChange} = props

    const [active, setActive] = useState(false);
    const [hovered, setHovered] = useState(value);

    const selectedItem = items.find(item => item.value === value);
    const hoveredItem = items.find(item => item.value === hovered);

    useEffect(() => {
        setHovered(value)
    }, [value])

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        onChange(value)
        toggleItems();
    }

    const onKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {

        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hovered) {
                    const pretendentElem = event.key === 'ArrowDown' ? items[i + 1] : items[i - 1]
                    if (pretendentElem) {
                        onChange(pretendentElem.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                onChange(items[0].value);
            }
        }
        if (event.key === 'Enter' || event.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div tabIndex={0} className={`${styles.select}`} onKeyUp={onKeyUp}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active && <div className={`${styles.items}`}>
                    {items.map(item => {
                        return <div
                            onMouseEnter={() => setHovered(item.value)}
                            onClick={() => onItemClick(item.value)}
                            className={`${styles.item} ${hoveredItem === item ? styles.selected : ''}`}
                            key={item.id}>{item.title}</div>
                    })}
                </div>
            }
        </div>
    );
};

export default CustomSelect;