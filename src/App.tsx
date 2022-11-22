import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";


function App() {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    return (
        <div className={'App'}>

            <Accordion title={'What to Learn? Controlled'} collapsed={collapsed} onClickTitle={setCollapsed}/>
            <UnControlledAccordion/>
        </div>
    );
}


export default App;
