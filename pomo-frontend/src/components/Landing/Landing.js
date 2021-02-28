import React, { Component } from 'react';
import Banner from '../Banner/Banner.jsx';
import About from '../About/About.jsx';
import Timer from '../Timer/Timer.js';

class Landing extends Component {
    render() {
        return (
            <div>
                <Banner></Banner>
                <About />
            </div>
        );
    }
}

export default Landing;
