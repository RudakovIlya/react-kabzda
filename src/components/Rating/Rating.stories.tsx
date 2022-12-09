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

export const RatingsValue: ComponentStory<typeof Rating> = (args: RatingPropsType) => <Rating {...args}
                                                                                              setValue={action('setValue')}/>

const one = RatingsValue.bind({});
one.args = {
    value: 1,
}

