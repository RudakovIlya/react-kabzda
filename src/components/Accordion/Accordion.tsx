import React from 'react';
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClickTitle: (collapsed: boolean) => void
}

const Accordion: React.FC<AccordionPropsType> = ({title, collapsed, onClickTitle}) => {

    return (
        <div>

            <AccordionTitle title={title} onClickTitle={onClickTitle} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

export default Accordion;