import UnControlledOnOff from "./UnControlledOnOff";
import {ComponentMeta} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControlled OnOff',
    component: UnControlledOnOff,
} as ComponentMeta<typeof UnControlledOnOff>

const callBack = action('on or off clicked')

export const DefaultOn = () => {
    return <UnControlledOnOff defaultValueOn={true} onChange={callBack}/>
}
export const DefaultOff = () => {
    return <UnControlledOnOff defaultValueOn={false} onChange={callBack}/>
}

export const BugMode = () => {
    return <div>Unsync when change default value when already rendered</div>
}