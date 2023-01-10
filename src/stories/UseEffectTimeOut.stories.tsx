import {ComponentMeta} from "@storybook/react";
import React, {useEffect, useState} from "react";

export default {
    title: 'SetTimeOutUseEffect',
} as ComponentMeta<any>


export const SetTimeOutUseEffect = () => {
    const [date, setDate] = useState(new Date());
    const [timerID, setTimerID] = useState<number | undefined>(undefined)
    const [count, setCount] = useState(1)

    useEffect(() => {
        setTimerID(+setInterval(() => setDate(new Date()), 1000))
    }, [])

    const formatter = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    const stringTime = formatter.format(date);

    const stopTimer = () => {
        clearInterval(timerID)
    }

    const upDateState = (prevState: number) => {
        return prevState + 1
    }

    useEffect(() => {
        setInterval(() => {
            setCount(upDateState)
        }, 1000)
    }, [])

    return <>
        <div>
            <div>Time:  &nbsp; {stringTime} &nbsp; &nbsp; &nbsp;</div>
            <button onClick={stopTimer}>stop timer</button>
        </div>

        <div>
            <h1>{count}</h1>
        </div>
    </>
}
