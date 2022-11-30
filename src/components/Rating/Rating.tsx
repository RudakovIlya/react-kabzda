import React from 'react';
import Star from "./Star/Star";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export  type RatingPropsType = {
    title: string
    value: RatingValueType
    setValue: (value: RatingValueType) => void
}

const Rating: React.FC<RatingPropsType> = ({value, setValue, title}) => {
    return (
        <div>
            <h3>{title}</h3>
            <Star setValue={setValue} value={1} selected={value > 0}/>
            <Star setValue={setValue} value={2} selected={value > 1}/>
            <Star setValue={setValue} value={3} selected={value > 2}/>
            <Star setValue={setValue} value={4} selected={value > 3}/>
            <Star setValue={setValue} value={5} selected={value > 4}/>
        </div>
    );
};

export default Rating;