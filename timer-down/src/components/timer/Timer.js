import React from 'react';
import Countdown from 'react-countdown-now';

const Timer = ({ handleDateClick, valueDate, rendererDisplay }) => (
    <div>
        <h1>Timer</h1>
        <input type="date" onChange={handleDateClick} />
        <br /><br /><br />
        <Countdown date={valueDate} renderer={rendererDisplay} />
    </div>
)

export default Timer;