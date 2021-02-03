import React from 'react';
import './Number.css';

const Number = (props) => {
    const value = props.value;

    return (
        <div>
            <figure className="Circle">
                <figure className="Number">
                    {value}
                </figure>
            </figure>
        </div>
    );
}; 

export default Number;