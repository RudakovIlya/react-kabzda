import {ComponentMeta} from "@storybook/react";
import React, {useState} from "react";

export default {
    title: 'UseState',
} as ComponentMeta<any>

const generateData = () => {
    let sum = 1;
    for (let i = 1; i < 10000; i++) {
        sum += i * Math.pow(i, 2)
    }
    console.log(sum)
    return sum
}

export const Example1 = () => {
    console.log('example')
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}
