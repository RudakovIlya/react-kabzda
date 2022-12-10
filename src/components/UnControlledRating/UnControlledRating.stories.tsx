import UnControlledRating from "./UnControlledRating";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'UnControlledRating',
    component: UnControlledRating,
} as ComponentMeta<typeof UnControlledRating>

const UnControlledRatingComponent: ComponentStory<typeof UnControlledRating> = (args) =>
    <UnControlledRating {...args}/>


export const zero = UnControlledRatingComponent.bind({});

zero.args = {
    defaultValue: 0,
}

export const one = UnControlledRatingComponent.bind({});
one.args = {
    defaultValue: 1,
}

export const two = UnControlledRatingComponent.bind({});
two.args = {
    defaultValue: 2,
}

export const three = UnControlledRatingComponent.bind({});
three.args = {
    defaultValue: 3,
}

export const four = UnControlledRatingComponent.bind({});
four.args = {
    defaultValue: 4,
}

export const five = UnControlledRatingComponent.bind({});
five.args = {
    defaultValue: 5,
}
