import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from "./components/UnControlledRating/UnControlledRating";


function App() {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    return (
        <div className={'App'}>
            <Accordion title={'What to Learn? Accordion Controlled'} collapsed={collapsed} onClickTitle={setCollapsed}/>

            <UnControlledAccordion/>

            <UnControlledRating/>
        </div>
    );
}


export default App;
