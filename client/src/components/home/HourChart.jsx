import React from 'react'

function HourChart() {
  return (
    <div className="home-content__wrap">
      <div className="hours__wrap">
        <div className="hours__container">
          <div className="hours__title">Hours</div>
          <div className="schedule__wrap">
            <div className="schedule__days">
              <span className="schedule__text">Monday</span>
              <span className="schedule__text">Tuesday</span>
              <span className="schedule__text">Wednesday</span>
              <span className="schedule__text">Thursday</span>
              <span className="schedule__text">Friday</span>
              <span className="schedule__text">Saturday</span>
              <span className="schedule__text">Sunday</span>
            </div>
            <div className="schedule__times">
              <span className="schedule__text">11AM-9PM</span>
              <span className="schedule__text">11AM-9PM</span>
              <span className="schedule__text">11AM-9PM</span>
              <span className="schedule__text">11AM-9PM</span>
              <span className="schedule__text">11AM-10PM</span>
              <span className="schedule__text">12PM-10PM</span>
              <span className="schedule__text">12PM-9PM</span>
            </div>
          </div>
        </div>
        <div className="hours__backdrop"></div>
      </div>
    </div>
  )
}

export default HourChart;