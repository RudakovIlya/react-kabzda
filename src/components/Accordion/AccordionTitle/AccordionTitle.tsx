import React from 'react';

export type AccordionTitlePropsType = {
    title: string
    collapsed: boolean,
    onClickTitle: (collapsed: boolean) => void
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = ({title, collapsed, onClickTitle}) => {

    const onClickTitleHandler = () => {
        onClickTitle(!collapsed)
    }

    return (
        <h3 onClick={onClickTitleHandler}>{title}</h3>
    );
};

export default AccordionTitle;