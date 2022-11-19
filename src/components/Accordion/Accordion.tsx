import React from 'react';

type AccordionPropsType = {
    titleValue: string,
    collapsed?: boolean,
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed  && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string,
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>;
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

export default Accordion;