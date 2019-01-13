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
      <div className="header__banner">
      
      </div>

      </div>
      </React.Fragment>

    )
  }
}

export default Homepage;
