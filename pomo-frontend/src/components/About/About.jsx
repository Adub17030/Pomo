import React, { Component } from 'react';
import RedPanda from '../../assets/redpanda.png';

class About extends Component {
    render() {
        return (
            <section class="section">
                <h1 class="title">About</h1>
                <h2 class="subtitle" style={{ paddingTop: '10px' }}>
                    Stay focused and productive with the power of the
                    <strong> Pomodoro</strong> technique.{' '}
                    <img src={RedPanda} style={{ width: '500px' }}></img>
                    Break up your taks into manageable intervals and earn Pomos
                    for finishing your tasks. Can YOU catch them All!
                </h2>
                <div class="timeline is-centered">
                    <header class="timeline-header">
                        <span class="tag is-medium is-primary">Start</span>
                    </header>
                    <div class="timeline-item is-primary">
                        <div class="timeline-marker is-primary"></div>
                        <div class="timeline-content">
                            <p class="heading">January 2016</p>
                            <p>
                                Timeline content - Can include any HTML element
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item is-warning">
                        <div class="timeline-marker is-warning is-image is-32x32">
                            <img src="https://bulma.io/images/placeholders/32x32.png"></img>
                        </div>
                        <div class="timeline-content">
                            <p class="heading">February 2016</p>
                            <p>
                                Timeline content - Can include any HTML element
                            </p>
                        </div>
                    </div>
                    <header class="timeline-header">
                        <span class="tag is-primary">2017</span>
                    </header>
                    <div class="timeline-item is-danger">
                        <div class="timeline-marker is-danger is-icon">
                            <i class="fa fa-flag"></i>
                        </div>
                        <div class="timeline-content">
                            <p class="heading">March 2017</p>
                            <p>
                                Timeline content - Can include any HTML element
                            </p>
                        </div>
                    </div>
                    <header class="timeline-header">
                        <span class="tag is-medium is-primary">End</span>
                    </header>
                </div>
            </section>
        );
    }
}

export default About;
