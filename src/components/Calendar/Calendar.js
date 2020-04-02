import React from 'react';
import './Calendar.css';
import TempCalendar from '../../assets/images/tempCalendar.PNG';

const Calendar = () => {

    return (
        <div className="Calendar">
            <h1>Calendar</h1>
            <img src={TempCalendar} />
        </div>
    )
}

export default Calendar;