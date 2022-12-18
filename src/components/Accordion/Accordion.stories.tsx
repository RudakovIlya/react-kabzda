import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Accordion from "./Accordion";
import {v1} from "uuid";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion stories',
    component: Accordion,
    argTypes: {
        items: {
            defaultValue: [
                {id: v1(), title: 'Dima', value: '1'},
                {id: v1(), title: 'Yana', value: '2'},
                {id: v1(), title: 'Ilya', value: '34'},
                {id: v1(), title: 'Andrei', value: '431'},
            ]
        },
        onClick: {
            defaultValue: action('some item was clicked')
        }
    }
} as ComponentMeta<typeof Accordion>

export const CollapsedAccordion: ComponentStory<typeof Accordion> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion items={[
        {id: v1(), title: 'Dima', value: '1'},
        {id: v1(), title: 'Yana', value: '2'},
        {id: v1(), title: 'Ilya', value: '3'},
        {id: v1(), title: 'Andrei', value: '4'},
    ]} onClick={action('Click on accordion body element')} title={'collapsed'} collapsed={collapsed}
                      onClickTitle={setCollapsed}/>
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
    collapsed: false,
    onClick: action(`un collapsed item`)
}