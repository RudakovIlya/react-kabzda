import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {AccordionContainer} from "./Accordion";
import {v1} from "uuid";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion stories',
    component: AccordionContainer,

} as ComponentMeta<typeof AccordionContainer>

export const CollapsedAccordion: ComponentStory<typeof AccordionContainer> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <AccordionContainer items={[
        {id: v1(), title: 'Dima', value: '1'},
        {id: v1(), title: 'Yana', value: '2'},
        {id: v1(), title: 'Ilya', value: '3'},
        {id: v1(), title: 'Andrei', value: '4'},
    ]} title={'collapsed'} collapsed={collapsed}
                               onClickTitle={setCollapsed}/>
}

const AccordionMain: ComponentStory<typeof AccordionContainer> = (args) => <AccordionContainer {...args}/>

export const WithTitle = AccordionMain.bind({});

WithTitle.args = {
    title: 'Accordion Title',
    items: [
        {id: v1(), title: 'Dima', value: '1'},
        {id: v1(), title: 'Yana', value: '2'},
        {id: v1(), title: 'Ilya', value: '34'},
        {id: v1(), title: 'Andrei', value: '431'},
    ],
    collapsed: true,
    onClickTitle: action('Click on Title')
}

export const collapsed = AccordionMain.bind({});

collapsed.args = {
    title: 'Collapsed',
    collapsed: true,
    items: [
        {id: v1(), title: 'Dima', value: '1'},
        {id: v1(), title: 'Yana', value: '2'},
        {id: v1(), title: 'Ilya', value: '34'},
        {id: v1(), title: 'Andrei', value: '431'},
    ]
}

export const unCollapsed = AccordionMain.bind({});

unCollapsed.args = {
    title: 'un collapsed',
    collapsed: false,

}
