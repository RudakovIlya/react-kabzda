import React from "react";
import styles from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean
}

export function OnOff(props: OnOffPropsType) {
    return (
        <>
            <div>
                <div className={`${props.on && styles.green} ${styles.block}`}>on</div>
                <div className={`${!props.on && styles.red} ${styles.block}`}>of</div>
                <span className={`${!props.on && styles.red} ${props.on && styles.green} ${styles.span}`}></span>
            </div>
        </>
    )
}

// type BlockPropsType = {
//     style: boolean
// }
//
// function Block(props: BlockPropsType) {
//
//     return (
//         <div>
//             <div className={`${props.style && styles.green} ${styles.block}`}>on</div>
//             <div className={`${!props.style && styles.red} ${styles.block}`}>of</div>
//             <span className={`${!props.style && styles.red} ${props.style && styles.green} ${styles.span}`}></span>
//         </div>
//     )
//
// }