import React, {useState} from 'react';

export type PropsType = {
    // on: boolean
}


export const OnOff: React.FC<PropsType> = (props) => {
    console.log('OnOff render')
    let [on, setOn] = useState(false);
    console.log(`on: ${on}`)
    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: `${on ? 'green' : 'white'}`,
    }

    const offStyle = {
        display: 'inline-block',
        width: '30px',
        margin: '0 10px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: `${on ? 'white' : 'red'}`,
    }

    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: `${!on ? 'red' : 'green'}`,
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
