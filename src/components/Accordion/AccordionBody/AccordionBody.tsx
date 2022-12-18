import React from 'react';
import {ItemType} from "../Accordion";

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody: React.FC<AccordionBodyType> = (props) => {
    const {items, onClick} = props

    const accordionBodyItem = items.map((item) => {
        return (
            <div onClick={() => onClick(item.value)} key={item.id}>{item.title}</div>
        )
    });

    return (
        <div>
            {accordionBodyItem}
        </div>
    );
};

export default AccordionBody;