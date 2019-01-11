import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Home from './components/home/Homepage';
import Footer from './components/footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollPosition: 0,
      isFiring: false,
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
   handleScroll() {
    var time = Date.now();
    return () => {
      if ((time + 100 - Date.now()) < 0) {
        this.setState({
          scrollPosition: window.scrollY
        })
        time = Date.now();
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Nav scrollTop={this.state.scrollPosition}/>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
