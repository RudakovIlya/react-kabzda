import React from 'react';
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

export type ItemType = {
    id: string
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClickTitle: (collapsed: boolean) => void
    items: ItemType[]
}

const Accordion: React.FC<AccordionPropsType> = ({title, collapsed, onClickTitle, items}) => {

    return (
        <div>

            <AccordionTitle title={title} onClickTitle={onClickTitle} collapsed={collapsed}/>
            {!collapsed && <AccordionBody items={items}/>}
        </div>
    );
};

export const AccordionContainer = React.memo(Accordion)
