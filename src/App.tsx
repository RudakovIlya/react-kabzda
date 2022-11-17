import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

// function declaration.

function App() {
    console.log('App rendering');
    // обязана вернуть JSX

    return (
        <div>
            {/*            <Accordion titleValue={'Первый заголовок'} collapsed={true}/>
            <Accordion titleValue={'Второй заголовок'} collapsed={false}/>
            <Rating value={3}/>
            <Rating value={4}/>*/}
            <OnOff on={true}/>
            <OnOff on={false}/>
        </div>

    );
}

type PageTitleProps = {
    title: string,
}

function PageTitle(props: PageTitleProps) {
    console.log('PageTitle rendering');
    return (
        <div>
            <h1>{props.title}</h1>

            <>any any any</>
        </div>
// fragment

    )

}

export default App;
