import React, { Component } from 'react'
import '../../scss/nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.showNavBar = this.showNavBar.bind(this);
  }


  showNavBar() {

  }

  render() {
    let navColor = this.props.scrollTop > 60 ? 'nav' : 'nav--transparent';

    return (
      <nav className={navColor}>
        <div className="nav__title-wrap">
          <h3 className="nav__title">Wild Tiger</h3>
        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" >
          <span className="toggler__bar"></span>
          <span className="toggler__bar"></span>
          <span className="toggler__bar"></span>
        </button>

        <div className="navbar-collapse" id="navbarLinks">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link" href="#">Home</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">Menu</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">Drinks</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">Location</div>
            </li>
          </ul>
        </div>
      </nav >
    )
  }
}

export default Nav;