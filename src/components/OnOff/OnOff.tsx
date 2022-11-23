import React from 'react';
import onOff from './OnOff.module.css'

export type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

const OnOff: React.FC<OnOffPropsType> = ({on, setOn}) => {

    const onClickHandler = () => {
        setOn(true)
    }
    const onClickHandler2 = () => {
        setOn(false)
    }

    return (
        <div>
            <h3>Controlled OnOff</h3>
            <div className={onOff.wrapper}>
                <div onClick={onClickHandler} className={`${onOff.buttons} ${on ? onOff.green : ''}`}>On</div>
                <div onClick={onClickHandler2} className={`${onOff.buttons} ${on ? '' : onOff.red}`}>Off</div>
                <div className={`${onOff.lamp} ${on ? onOff.green : onOff.red}`}></div>
            </div>
        </div>
    );
};

export default OnOff;