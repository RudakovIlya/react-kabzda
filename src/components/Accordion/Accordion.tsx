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
    onClick: (value: any) => void
}

const Accordion: React.FC<AccordionPropsType> = ({title, collapsed, onClickTitle, onClick, items}) => {

    return (
        <div>

            <AccordionTitle title={title} onClickTitle={onClickTitle} collapsed={collapsed}/>
            {!collapsed && <AccordionBody onClick={onClick} items={items}/>}
        </div>
    );
};

export default Accordion;