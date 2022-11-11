import React from 'react';
import Timer from './Timer';

function TimeCounterSec() {
  return (
    <section>
        <div>
            <h3>HURRY UP!</h3>
            <h4>Get Ready For The Event</h4>
            <h5>19 November, 2022</h5>
        </div>
        <div>
            <Timer duration={1 * 24 * 60 * 60 * 1000}/>
        </div>
    </section>
  )
}

export default TimeCounterSec;