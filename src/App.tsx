import React, {useState} from 'react';
import './App.css';
import {AccordionContainer} from "./components/Accordion/Accordion";
import {
    UnControlledAccordionContainer
} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRatingContainer} from "./components/UnControlledRating/UnControlledRating";
import {RatingContainer, RatingValueType} from "./components/Rating/Rating";
import {UnControlledOnOffContainer} from "./components/UnControlledOnOff/UnControlledOnOff";
import {OnOffContainer} from "./components/OnOff/OnOff";

function App() {

    const [collapsed, setCollapsed] = useState<boolean>(true);

    const [value, setValue] = useState<RatingValueType>(0);

    const [on, setOn] = useState<boolean>(false);

    const items = [{id: '1', title: 'Title', value: 2}, {id: '4', title: 'Title', value: 2}]

    return (
        <div className={'App'}>
            <UnControlledAccordionContainer/>
            <AccordionContainer title={'What to Learn? Accordion Controlled'} onClickTitle={setCollapsed} items={items}
                                collapsed={collapsed}/>
            <UnControlledRatingContainer/>
            <RatingContainer title={'Controlled'} value={value} setValue={setValue}/>
            <UnControlledOnOffContainer onChange={(on) => on}/>
            <OnOffContainer on={on} setOn={setOn}/>
        </div>
    );
}


export default App;
