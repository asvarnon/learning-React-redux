import React from 'react';
import {Link} from 'react-router-dom'


function Tweet (props) {


    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.tweet}</h1>
        </div>
    )
};

export default Tweet