import React, {useState} from 'react';
import UnControlledStar, {UnControlledValuesType} from "./UnControlledStar/UnControlledStar";
import {RatingValueType} from "../Rating/Rating";

type UnControlledRatingPropsType = {
    defaultValue?: RatingValueType
}

const UnControlledRating: React.FC<UnControlledRatingPropsType> = (props) => {

    const [value, setValue] = useState<UnControlledValuesType>(props.defaultValue ? props.defaultValue : 0);

    const title = 'UnControlled';

    return (
        <div className={'main'}>
            <h3>{title}</h3>
            <UnControlledStar selected={value > 0} values={1} onClick={setValue}/>
            <UnControlledStar selected={value > 1} values={2} onClick={setValue}/>
            <UnControlledStar selected={value > 2} values={3} onClick={setValue}/>
            <UnControlledStar selected={value > 3} values={4} onClick={setValue}/>
            <UnControlledStar selected={value > 4} values={5} onClick={setValue}/>
        </div>
    );
};

export const UnControlledRatingContainer = React.memo(UnControlledRating);

export default UnControlledRating;