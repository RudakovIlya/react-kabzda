import React, {useState} from 'react';
import OnOff from "./OnOff";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff stories',
    component: OnOff,
} as ComponentMeta<typeof OnOff>

export const OnOffComponent: ComponentStory<typeof OnOff> = () => {
    const [on, setOn] = useState<boolean>(true);

    return <OnOff on={on} setOn={setOn}/>
};

export const OffComp: ComponentStory<typeof OnOff> = () => {

    return <OnOff on={false} setOn={() => {
    }}/>
};

export const OnComp: ComponentStory<typeof OnOff> = () => {

    return <OnOff on={true} setOn={() => {
    }}/>
};

export const TestOnOff: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} setOn={action('Click')}/>

const test = TestOnOff.bind({});

test.args = {
    on: false,
}