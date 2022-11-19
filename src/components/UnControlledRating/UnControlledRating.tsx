import React, {useState} from "react";

export function UnControlledRating() {

    const [value, setValue] = useState<number>(0);

    return (
        <div>
            <Star selected={value > 0} setSelect={setValue} value={1}/>
            <Star selected={value > 1} setSelect={setValue} value={2}/>
            <Star selected={value > 2} setSelect={setValue} value={3}/>
            <Star selected={value > 3} setSelect={setValue} value={4}/>
            <Star selected={value > 4} setSelect={setValue} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean,
    setSelect: (select: number) => void,
    value: number
}

function Star(props: StarPropsType) {

    const onClickHandler = () => {
        props.setSelect(props.value)
    }

    return !props.selected ? <span onClick={onClickHandler}>start </span> :
        <span onClick={onClickHandler}><b>star </b></span>;

}