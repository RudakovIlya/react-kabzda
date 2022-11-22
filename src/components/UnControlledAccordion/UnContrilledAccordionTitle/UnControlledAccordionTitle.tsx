import React from 'react';

export type UnControlledAccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

const UnControlledAccordionTitle: React.FC<UnControlledAccordionTitlePropsType> = ({title, collapsed, onClick}) => {

    const onClickHandler = () => {
        onClick(!collapsed)
    }

    const titleStyle = {
       cursor: 'pointer',
    }

    return (
        <div style={titleStyle}>
            <h3 onClick={onClickHandler}>{title}</h3>
        </div>
    );
};

export default UnControlledAccordionTitle;