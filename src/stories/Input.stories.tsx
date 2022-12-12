import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Input from "./Input";

export default {
    title: 'Input',
    component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    type: 'color',
    value: '#e66465'
}

/*=================================================================================================*/

export const UnControlledTemplate: ComponentStory<typeof Input> = () => {

    const [value, setValue] = useState<string>('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    };
    return <><Input value={value} onChange={onChange}/> ----------- {value}</>
}

/*=================================================================================================*/

export const UnControlledInputValueByButtonsPress: ComponentStory<typeof Input> = () => {

    const [value, setValue] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);

    const onSave = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el?.value)
    }

    return <><input type="text" ref={inputRef}/>
        <button onClick={onSave}>save</button>
        ----------- actual value: {value}</>
};