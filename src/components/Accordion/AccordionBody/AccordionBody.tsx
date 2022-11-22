import React from 'react';
import {v1} from "uuid";

const AccordionBody = () => {

    const accordionBodyData = [
        {id: v1(), title: 'HTML'},
        {id: v1(), title: 'JS'},
        {id: v1(), title: 'React'},
        {id: v1(), title: 'Redux'},
        {id: v1(), title: 'TypeScript'},
    ]

    const accordionBodyItem = accordionBodyData.map(({id, title}) => {
        return (
            <div key={id}>{title}</div>
        )
    })

    return (
        <div>
            {accordionBodyItem}
        </div>
    );
};

export default AccordionBody;