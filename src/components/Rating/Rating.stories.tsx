import React, {useState} from 'react';
import Rating, {RatingPropsType, RatingValueType} from "./Rating";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Rating stories',
    component: Rating,
} as ComponentMeta<typeof Rating>

export const RatingStar: ComponentStory<typeof Rating> = (args: RatingPropsType) => {
    const [rat, setRat] = useState<RatingValueType>(5)
    return <Rating {...args} value={rat} setValue={setRat}/>
};

const RatingsValue: ComponentStory<typeof Rating> = (args: RatingPropsType) => <Rating {...args}
                                                                                       setValue={action('setValue')}/>
export const zero = RatingsValue.bind({});
zero.args = {
    value: 0,
}

export const one = RatingsValue.bind({});
one.args = {
    value: 1,
}

export const two = RatingsValue.bind({});
two.args = {
    value: 2,
}

export const three = RatingsValue.bind({});
three.args = {
    value: 3,
}

export const four = RatingsValue.bind({});
four.args = {
    value: 4,
}

export const five = RatingsValue.bind({});
five.args = {
    value: 5,
}
