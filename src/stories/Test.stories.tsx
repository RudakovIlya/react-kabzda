import {ComponentMeta} from "@storybook/react";
import React, {useEffect, useState} from "react";

export default {
    title: 'Test',
} as ComponentMeta<any>


export const Test = () => {

    const [count, setCount] = useState(6)

    useEffect(() => {
        const idInterval = setInterval(() => {

            setCount((prevState) => prevState + 1)
        }, 1000)

        return () => {
            clearInterval(idInterval)
            console.log('умерла так умерла')
        }
    }, [])
    /*    didmount //первая отрисовка []
        didUpdate// просто перерисовка, при изменении useState /[]/
        didUmount // компонентка умирает*/

    return (
        <>
            <div>
                <h1>{count}</h1>
            </div>
        </>
    )
}
