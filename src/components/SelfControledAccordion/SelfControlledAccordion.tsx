import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string,
}


const SelfControlledAccordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string,
    setCollapsed: (collapsed: boolean) => void,
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {

    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed && true);
    }

    return <h3 onClick={onClickHandler}>{props.title}</h3>;
}

function AccordionBody() {
    return (
        <ul>
            <li>1 js</li>
            <li>2 html</li>
            <li>3 css</li>
            <li>4 react</li>
            <li>5 typescript</li>
        </ul>
    );
}


export default SelfControlledAccordion;