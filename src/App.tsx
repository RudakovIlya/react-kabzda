import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

// function declaration.

function App() {
    console.log('App rendering');
    // обязана вернуть JSX

    return (
        <div>
            <PageTitle title={'This is App component!'}/>
            <PageTitle title={'Users page'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={'Первый заголовок'} collapsed={true}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Accordion titleValue={'Второй заголовок'} collapsed={false}/>
        </div>

    );
}

type PageTitleProps= {
    title: string,
}

function PageTitle(props:PageTitleProps) {
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
