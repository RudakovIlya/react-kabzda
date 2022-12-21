import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from "./components/UnControlledRating/UnControlledRating";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";
import OnOff from "./components/OnOff/OnOff";

function App() {

    const [collapsed, setCollapsed] = useState<boolean>(true);

    const [value, setValue] = useState<RatingValueType>(0);

    const [on, setOn] = useState<boolean>(false);


    return (
        <div className={'App'}>
            <UnControlledAccordion/>
            <Accordion items={[{id: '1', title: 'Title', value: 2}, {id: '2', title: 'Title', value: 2}, {
                id: '3',
                title: 'Title',
                value: 2
            }, {id: '4', title: 'Title', value: 2}]} onClick={() => {
            }} title={'What to Learn? Accordion Controlled'} collapsed={collapsed} onClickTitle={setCollapsed}/>

            <UnControlledRating/>
            <Rating title={'Controlled'} value={value} setValue={setValue}/>

            <UnControlledOnOff onChange={(on) => on}/>
            <OnOff on={on} setOn={setOn}/>

        </div>
    );
}


export default App;
