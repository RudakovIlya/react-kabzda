import React from 'react'
import SuperButton from "./SuperButton";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'SuperButton',
    component: SuperButton,
} as ComponentMeta<typeof SuperButton>

const Template: ComponentStory<typeof SuperButton> = (args) => <SuperButton {...args}/>

export const Primary = Template.bind({});

Primary.args = {
    xType: 'primary',
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    xType: 'secondary',
    label: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
    xType: 'outline',
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    buttonSize: 'large',
    label: 'Button',
};
