import {ComponentMeta, ComponentStory} from "@storybook/react";
import UnControlledAccordion from "./UnControlledAccordion";

export default {
    title: 'UnControlledAccordion stories',
    component: UnControlledAccordion,
} as ComponentMeta<typeof UnControlledAccordion>

export const UnControlledAccordionComponent: ComponentStory<typeof UnControlledAccordion> = () => {
    return <UnControlledAccordion />
}