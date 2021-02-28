import React, { Component, createRef, useRef} from 'react';
import Banner from '../Banner/Banner.jsx';
import About from '../About/About.jsx';
import Timer from '../Timer/Timer.js';
  

class Landing extends Component {

    constructor() {
        super();
        this.myRef = React.createRef()  
        this.handleScrollCallback = this.handleScrollCallback.bind(this);
      }
    handleScrollCallback = () => {
        console.log("Callback worked")
        this.myRef.current.scrollIntoView()
    }

    render() {
        return (
            <div>
                <Banner scrollCallback={() => {this.handleScrollCallback()}}></Banner>
                <div ref={this.myRef}>
                <About />
                </div>
            </div>
        );
    }
}

export default Landing;
