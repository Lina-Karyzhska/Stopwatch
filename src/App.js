import React, { useState } from 'react';
import Stopwatch from './Stopwatch';
import Controllers from './Controllers';

function App() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const getTime = (time) => {
    let amount = time;
    let h = (l - l % 3600) / 3600;
    amount = amount - h * 3600;
    let m = (amount - amount % 60) / 60;
    let s = amount - m * 60;

    setTime({
      hours: h,
      minutes: m,
      seconds: s
    })
  }

  return (
    <div className="App">
      <div>
        <Stopwatch time={time}/>
        <Controllers handleTime={getTime}/>
      </div>
    </div>
  );
}

export default App;
