import React, {useState} from 'react';
import UnControlledAccordionTitle from "./UnContrilledAccordionTitle/UnControlledAccordionTitle";
import UnControlledAccordionBody from "./UnControlledAccordionBody/UnControlledAccordionBody";
import body from './UnControlledAccordionBody/body.module.css'

const UnControlledAccordion = () => {

    const [collapsedAccordion, setCollapsed] = useState(true);
    console.log('UnControlled Accordion')
    return (
        <div>
            <UnControlledAccordionTitle
                title={'What to Learn? Accordion UnControlled'}
                collapsed={collapsedAccordion}
                onClick={setCollapsed}/>
            <UnControlledAccordionBody className={`${!collapsedAccordion ? `${body.collapsed}` : ''}`}/>
        </div>
    );
};

export default UnControlledAccordion;