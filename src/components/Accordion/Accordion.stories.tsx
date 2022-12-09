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
