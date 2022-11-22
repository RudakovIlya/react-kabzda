import React, {useState} from 'react';
import UnControlledAccordionTitle from "./UnContrilledAccordionTitle/UnControlledAccordionTitle";
import UnControlledAccordionBody from "./UnControlledAccordionBody/UnControlledAccordionBody";
import body from './UnControlledAccordionBody/body.module.css'

const UnControlledAccordion = () => {

    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <UnControlledAccordionTitle
                title={'What to Learn? UnControlled'}
                collapsed={collapsed}
                onClick={setCollapsed}/>
            <UnControlledAccordionBody className={`${!collapsed ? `${body.collapsed}` : ''}`}/>

        </div>
    );
};

export default UnControlledAccordion;