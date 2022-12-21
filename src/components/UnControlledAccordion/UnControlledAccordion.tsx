import React, {useReducer} from 'react';
import UnControlledAccordionTitle from "./UnContrilledAccordionTitle/UnControlledAccordionTitle";
import UnControlledAccordionBody from "./UnControlledAccordionBody/UnControlledAccordionBody";
import body from './UnControlledAccordionBody/body.module.css'
import {reducer} from "./Reducer";

const UnControlledAccordion = () => {

    const [collapsedAccordion, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            <UnControlledAccordionTitle
                title={'What to Learn? Accordion UnControlled'}
                collapsed={collapsedAccordion.collapsed}
                onClick={() => {
                    dispatch({type: 'TOGGLE-COLLAPSED'})
                }}/>
            <UnControlledAccordionBody className={`${!collapsedAccordion.collapsed ? `${body.collapsed}` : ''}`}/>
        </div>
    );
};

export const UnControlledAccordionContainer = React.memo(UnControlledAccordion)

export default UnControlledAccordion;