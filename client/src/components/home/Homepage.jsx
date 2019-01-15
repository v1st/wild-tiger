import React, { Component } from 'react'
import HourChart from './HourChart';
import ParallaxImage from './ParallaxImage';
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
            <button className="main__button">Order Now</button>
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
        <HourChart />
        <ParallaxImage />
        <div className="location__container">
          <div className="location__title">Location</div>
          <div className="location__address">1825 SE 164th AVE Suite 101
VANCOUVER, WA 98683</div>
          <div className="phone-number">360-882-8887</div>
          <button className="main__button">Facebook</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Homepage;
