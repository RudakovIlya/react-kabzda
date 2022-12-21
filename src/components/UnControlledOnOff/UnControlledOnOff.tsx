import React, {useState} from 'react';

type UnControlledOnOffPropsType = {
    onChange: (on: boolean) => void
    defaultValueOn?: boolean
}

const UnControlledOnOff: React.FC<UnControlledOnOffPropsType> = (props) => {

    const [on, setOn] = useState<boolean>(props.defaultValueOn ? props.defaultValueOn : false);

    const onClickHandler = () => {
        setOn(true);
        props.onChange(true)
    };
    const onClickHandler2 = () => {
        setOn(false)
        props.onChange(false)
    };
    const wrapper = {
        display: 'flex',
        columnGap: '10px'
    };
    const buttons = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        padding: '7px 6px 6px',
    };
    const lamp = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black'
    };
    const back = {
        background: `${on ? 'green' : 'white'}`,
    };
    const back2 = {
        background: `${!on ? 'red' : 'white'}`,
    };
    const lampBack = {
        backgroundColor: `${on ? 'green' : 'red'}`
    };

    return (
        <div>
            <h3>UnControlledOnOff</h3>
            <div style={wrapper}>
                <div onClick={onClickHandler} style={{...buttons, ...back}}>On</div>
                <div onClick={onClickHandler2} style={{...buttons, ...back2}}>Off</div>
                <div style={{...lamp, ...lampBack}} className={'123'}></div>
            </div>
        </div>
    );
};

export const UnControlledOnOffContainer = React.memo(UnControlledOnOff)

export default UnControlledOnOff;