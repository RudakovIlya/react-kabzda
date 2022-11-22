import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from "./components/UnControlledRating/UnControlledRating";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";


function App() {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const [value, setValue] = useState<RatingValueType>(0)

    return (
        <div className={'App'}>
            <Accordion title={'What to Learn? Accordion Controlled'} collapsed={collapsed} onClickTitle={setCollapsed}/>
            <UnControlledAccordion/>

            <UnControlledRating/>
            <Rating title={'Controlled'} value={value} setValue={setValue}/>

            <UnControlledOnOff/>

        </div>
    );
}


export default App;
