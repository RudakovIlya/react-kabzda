import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";


function App() {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    return (
        <div className={'App'}>

            <Accordion title={'What to Learn?'} collapsed={collapsed} onClickTitle={setCollapsed}/>

        </div>
    );
}


export default App;
