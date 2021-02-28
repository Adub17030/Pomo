import React, { Component } from 'react';
import RedPanda from '../../assets/redpanda.png';

class About extends Component {
    render() {
        return (
            <section class="section">
                <h1 class="title">What is Pomo?</h1>
                <h2 class="subtitle" style={{ paddingTop: '10px' }}>
                    Pomo is a Stay focused and productive with the power of the
                    <strong> Pomodoro</strong> technique.{' '}
                </h2>
                <div class="timeline is-centered">
                    <header class="timeline-header">
                        <span
                            class="tag is-medium is-link"
                            style={{ fontSize: '30px' }}
                        >
                            Start
                        </span>
                    </header>
                    <div class="timeline-item is-danger">
                        <div
                            class="timeline-marker is-danger"
                            style={{
                                height: '25px',
                                width: '25px',
                                marginTop: '25px',
                            }}
                        ></div>
                        <div class="timeline-content">
                            <p
                                class="heading"
                                style={{
                                    fontSize: '25px',
                                }}
                            >
                                Working
                            </p>
                            <p
                                style={{
                                    fontSize: '20px',
                                }}
                            >
                                20 Minutes
                            </p>
                        </div>
                    </div>
                    <header class="timeline-header">
                        <span
                            class="tag is-primary"
                            style={{ fontSize: '20px' }}
                        >
                            5 Minute Break
                        </span>
                    </header>
                    <div class="timeline-item is-danger">
                        <div
                            class="timeline-marker is-danger"
                            style={{
                                height: '25px',
                                width: '25px',
                                marginTop: '25px',
                            }}
                        ></div>
                        <div class="timeline-content">
                            <p
                                class="heading"
                                style={{
                                    fontSize: '25px',
                                }}
                            >
                                Working
                            </p>
                            <p
                                style={{
                                    fontSize: '20px',
                                    paddingRight: '13px',
                                }}
                            >
                                20 Minutes
                            </p>
                        </div>
                    </div>
                    <header class="timeline-header">
                        <span
                            class="tag is-primary"
                            style={{ fontSize: '20px' }}
                        >
                            5 Minute Break
                        </span>
                    </header>
                    <div class="timeline-item is-danger">
                        <div
                            class="timeline-marker is-danger"
                            style={{
                                height: '25px',
                                width: '25px',
                                marginTop: '25px',
                            }}
                        ></div>
                        <div class="timeline-content">
                            <p
                                class="heading"
                                style={{
                                    fontSize: '25px',
                                }}
                            >
                                Working
                            </p>
                            <p
                                style={{
                                    fontSize: '20px',
                                }}
                            >
                                20 Minutes
                            </p>
                        </div>
                    </div>
                    <header class="timeline-header">
                        <span
                            class="tag is-primary"
                            style={{ fontSize: '20px' }}
                        >
                            20 Minute Break
                        </span>
                    </header>
                    <div class="timeline-item is-primary"></div>
                    <header class="timeline-header">
                        <span
                            class="tag is-medium is-link"
                            style={{ fontSize: '30px' }}
                        >
                            End
                        </span>
                    </header>
                </div>
                <img
                    src={RedPanda}
                    style={{
                        width: '300px',
                        marginTop: '25px',
                        marginBottom: '25px',
                        marginRight: '100px',
                    }}
                ></img>
                <h2>
                    Break up your taks into manageable intervals and earn Pomos
                    for finishing your tasks. Can YOU catch them All!
                </h2>
            </section>
        );
    }
}

export default About;
