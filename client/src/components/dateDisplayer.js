import React from 'react';

function DateDisplayer(props) 
{
    const now = new Date().toDateString()
    return (   
    <div>
        <p> {now} <span>{props.city} {props.countryCode}</span></p>
        
    </div>)
}

export default DateDisplayer;