import React, {useState} from 'react';
import {ItemType} from "../Accordion/Accordion";

type CustomSelectPropsType = {
    value: any
    onChange: (value: any) => void
    item: ItemType[]
}

const CustomSelect: React.FC<CustomSelectPropsType> = (props) => {

    const [collapsed, setCollapsed] = useState(false);

    const {item, onChange, value} = props

    return (
        <div>
            <div>{1}</div>
            <ul>

            </ul>

        </div>
    );
};

export default CustomSelect;