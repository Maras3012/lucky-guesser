import React from 'react';
import Congratulations from '../Congratulations/Congratulations';

const NumberLog = (props) => {
    let output = null;
    let winner = props.winner

    if(props.value === winner){
        output = <Congratulations />;
    }else{
        output = "Your number is "+props.value+"!";
    }

    return (
        <div>
            {output}
        </div>
    );
}; 

export default NumberLog;