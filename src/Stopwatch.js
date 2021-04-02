import React from 'react';

function Stopwatch(props) {
    let time = {
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    for(let key in props.time) {
        time[key] = props.time[key] < 10 ? `0${props.time[key]}` : props.time[key];
    }

    const {hours, minutes, seconds} = time;
    
    return (
      <div className="stopWatch">
        <span>{hours}:{minutes}:{seconds}</span>
      </div>
    );
}

export default Stopwatch;
