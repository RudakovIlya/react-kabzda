import React from 'react';
import {ItemType} from "../Accordion";

type AccordionBodyType = {
    items: ItemType[]
}

const AccordionBody: React.FC<AccordionBodyType> = (props) => {
    const {items} = props

    const accordionBodyItem = items.map((item) => {
        return (
            <div key={item.id}>{item.title}</div>
        )
    });

    return (
        <div>
            {accordionBodyItem}
        </div>
    );
};

export default AccordionBody;