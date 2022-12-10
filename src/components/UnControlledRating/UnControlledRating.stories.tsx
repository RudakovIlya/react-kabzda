import UnControlledRating from "./UnControlledRating";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'UnControlledRating stories',
    component: UnControlledRating,
} as ComponentMeta<typeof UnControlledRating>

export const UnControlledRatingComponent: ComponentStory<typeof UnControlledRating> = () => <UnControlledRating/>