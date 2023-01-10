import {ComponentMeta} from "@storybook/react";
import React, {useEffect, useState} from "react";

export default {
    title: 'SetTimeOutUseEffect',
} as ComponentMeta<any>


export const SetTimeOutUseEffect = () => {
    const [date, setDate] = useState(new Date());
    const [timerID, setTimerID] = useState<number | undefined>(undefined)


    useEffect(() => {
        setTimerID(+setInterval(() => setDate(new Date()), 1000))
    }, [])

    const formatter = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    const stringTime = formatter.format(date);


    return <>
        Time:  &nbsp; {stringTime}
    </>
}
