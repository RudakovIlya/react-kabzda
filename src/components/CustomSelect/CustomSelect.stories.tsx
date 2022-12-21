import React, {useState} from 'react';
import CustomSelect from "./CustomSelect";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {v1} from "uuid";

export default {
    title: 'Custom Select',
    component: CustomSelect
} as ComponentMeta<typeof CustomSelect>

export const WithValue: ComponentStory<typeof CustomSelect> = () => {
    const [value, setValue] = useState('2');
    return (
        <>
            <CustomSelect onChange={setValue} value={value}
                          items={[{id: v1(), title: 'Minsk', value: '1'}, {
                              id: v1(),
                              title: 'Moscow',
                              value: '2'
                          }, {id: v1(), title: 'Kiev', value: '3'}]}/>
        </>
    )
}

export const WithOutValue = () => {
    const [value, setValue] = useState('');
    return (
        <>
            <CustomSelect
                value={value}
                onChange={setValue}
                items={[{id: v1(), title: 'Minsk', value: '1'}, {
                    id: v1(),
                    title: 'Moscow',
                    value: '2'
                }, {id: v1(), title: 'Kiev', value: '3'}]}/>

        </>
    )
}
