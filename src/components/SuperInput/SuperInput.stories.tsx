import SuperInput from "./SuperInput";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ChangeEvent, useState} from "react";

export default {
    title: 'SuperInput',
    component: SuperInput
} as ComponentMeta<typeof SuperInput>

const SuperInputs: ComponentStory<typeof SuperInput> = (args) => <SuperInput {...args}/>

export const SuperInputChangeEvent: ComponentStory<typeof SuperInput> = () => {

    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
        error && setError('');
    }
    const onEnter = () => {
        if (!value.trim()) {
            setError('Error!');
        } else {
            setValue('')
        }
    }
    return <SuperInput autoFocus onChange={onChangeValue} value={value} onEnter={onEnter} error={error}/>
}

export const InputName = SuperInputs.bind({});

InputName.args = {
    name: 'Hooli',
}

export const ErrorInput = SuperInputs.bind({});

ErrorInput.args = {
    name: 'Hooli',
    error: 'Title is required!'
}