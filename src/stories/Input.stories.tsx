import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Input from "./Input";

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        type: {
            description: 'Input'
        }
    }
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

/*=================================================================================================*/

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {

        setParentValue(event.currentTarget.value)
    }
    return <input type="text" value={parentValue} onChange={onChange}/>
}

/*=================================================================================================*/

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}

/*=================================================================================================*/

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value);

    }
    return <select value={parentValue} onChange={onChange}>
        <option></option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}