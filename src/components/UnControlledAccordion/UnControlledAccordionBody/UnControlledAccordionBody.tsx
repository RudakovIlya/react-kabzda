import React from 'react';
import {v1} from "uuid";
import body from './body.module.css'

export type UnControlledAccordionBodyPropsType = {
    className: string
}

const UnControlledAccordionBody: React.FC<UnControlledAccordionBodyPropsType> = ({className}) => {

    const uncontrolledAccordionBodyData = [
        {id: v1(), title: 'HTML'},
        {id: v1(), title: 'JS'},
        {id: v1(), title: 'React'},
        {id: v1(), title: 'Redux'},
        {id: v1(), title: 'TypeScript'},
    ];

    const uncontrolledAccordionBodyItem = uncontrolledAccordionBodyData.map(({id, title}) => {
        return <div key={id}>{title}</div>
    })
    const getRandomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
    const bodyStyle = {
        padding: '10px',
        backgroundColor: `rgba(${getRandomNum(0, 255)}, ${getRandomNum(0, 255)}, ${getRandomNum(0, 255)},${Math.random()})`,
        color: `rgb(${getRandomNum(0, 255)}, ${getRandomNum(0, 255)}, ${getRandomNum(0, 255)} )`
    }

    return (
        <div className={`${body.accordionBody} ${className}`}>
            <div style={bodyStyle}>
                {uncontrolledAccordionBodyItem}
            </div>
        </div>
    );
};

export default UnControlledAccordionBody;