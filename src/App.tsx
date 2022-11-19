import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import SelfControlledAccordion from "./components/SelfControledAccordion/SelfControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

// function declaration.

function App() {
    console.log('App rendering');

    return (
        <div className={'App'}>
            {/*            <Accordion titleValue={'Main'} collapsed={true}/>
            <Accordion titleValue={'Main 2'} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>*/}

            <OnOff/>
            <SelfControlledAccordion titleValue={'Main'}/>
            <UnControlledRating/>

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
