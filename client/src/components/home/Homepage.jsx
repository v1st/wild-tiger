import React, { Component } from 'react'
import '../../scss/home.scss';

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="homepage__container">
          <div className="header__image"></div>
          <div className="header-info__container">
            <div className="header-info__title-wrap">
              <div className="header-info__title">Tasty Thai Food</div>
              <span className="line-break"></span>
            </div>
            <div className="header-info__quote">"Delicious dishes from fresh ingredients"</div>
            <button className="order__button">Order Now</button>
          </div>
          <div className="header__banner"></div>
          <div className="icon__wrap">
            <div className="icon__card">
              <div className="icon--food"></div>
              <div className="icon__subtitle">Food</div>
            </div>
            <div className="icon__card">
              <div className="icon--drinks"></div>
              <div className="icon__subtitle">Drinks</div>
            </div>
            <div className="icon__card">
              <div className="icon--dessert"></div>
              <div className="icon__subtitle">Dessert</div>
            </div>
          </div>
        </div>

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
      </React.Fragment>
    )
  }
}

export default Homepage;
