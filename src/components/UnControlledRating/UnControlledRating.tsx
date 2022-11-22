import React, {useState} from 'react';
import UnControlledStar, {UnControlledValuesType} from "./UnControlledStar/UnControlledStar";

const UnControlledRating = () => {

    const [value, setValue] = useState<UnControlledValuesType>(0);


    return (
        <div className={'main'}>
            <UnControlledStar selected={value > 0} values={1} onClick={setValue}/>
            <UnControlledStar selected={value > 1} values={2} onClick={setValue}/>
            <UnControlledStar selected={value > 2} values={3} onClick={setValue}/>
            <UnControlledStar selected={value > 3} values={4} onClick={setValue}/>
            <UnControlledStar selected={value > 4} values={5} onClick={setValue}/>
        </div>
    );
};

export default UnControlledRating;