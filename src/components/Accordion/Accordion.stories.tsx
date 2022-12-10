import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Accordion from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion,
} as ComponentMeta<typeof Accordion>


export const CollapsedAccordion: ComponentStory<typeof Accordion> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion title={'collapsed'} collapsed={collapsed} onClickTitle={setCollapsed}/>
}

const AccordionMain: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>

export const WithTitle = AccordionMain.bind({});

WithTitle.args = {
    title: 'Accordion Title',
}

export const collapsed = AccordionMain.bind({});

collapsed.args = {
    title: 'Collapsed',
    collapsed: true
}

export const unCollapsed = AccordionMain.bind({});

unCollapsed.args = {
    title: 'un collapsed',
    collapsed: false
}