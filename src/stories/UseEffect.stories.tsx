import {ComponentMeta} from "@storybook/react";
import React, {useEffect, useState} from "react";


export default {
    title: 'UseEffect',
} as ComponentMeta<any>


export const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [counter2, setCounter2] = useState(1)

    useEffect(() => {
        console.log('UseEffect every render')
        document.title = `${counter}`
    })

    useEffect(() => {
        console.log('UseEffect only first render (componentDidMount)') // componentDidMount
        document.title = `${counter}`
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        console.log('UseEffect first render and every counter change (componentDidUpdate)') // componentDidUpdate
        document.title = `${counter}`
    }, [counter])


    return <>
        counter  &nbsp;{counter} | counter2 &nbsp;{counter2} &nbsp; &nbsp; &nbsp;

        <button onClick={() => setCounter(counter + 1)}>counter update</button>
        <button onClick={() => setCounter2(counter2 + 1)}>counter2 update</button>
    </>
}
