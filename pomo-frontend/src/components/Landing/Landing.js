import React, { Component, createRef, useRef} from 'react';
import Banner from '../Banner/Banner.jsx';
import About from '../About/About.jsx';
import Timer from '../Timer/Timer.js';
import {withRouter} from 'react-router-dom';
import { getUserData } from '../../firebase/firebase.utils.js';


class Landing extends Component {

    constructor() {
        super();
        this.myRef = React.createRef(); 
        this.handleScrollCallback = this.handleScrollCallback.bind(this);
        this.state = {
            uid: '',
            user:''
        }
    }
    handleScrollCallback = () => {
        console.log("Callback worked")
        this.myRef.current.scrollIntoView()
    }


    componentWillMount() {
        const uidProps = this.props.location.state;
        this.setState({uid: uidProps}); 
    }

    componentDidMount() {
        const uid = this.state.uid;
        if (uid) {
            if(uid.length >= 20) {
                this.userData(); 
            }
        }
    }

    userData = async () => {
        const {uid} = this.state;
        const userRef = await getUserData(uid);
        this.setState({user: userRef.email});
        console.log(userRef.email);  
    }
    render() 
    {
        const user = this.state.user; 
        if (user) {
            if(user.length >= 2) {
                return ( 
                    <div>
                        <h1>Hello {user}</h1>
                        <Banner scrollCallback={() => {this.handleScrollCallback()}}></Banner>
                        <div ref={this.myRef}>
                        <About />
                        </div>
                    </div>
                ); 
            }
            return ( 
            
            <div>
                <Banner scrollCallback={() => {this.handleScrollCallback()}}></Banner>
                <div ref={this.myRef}>
                <About />
                </div>
            </div>
        );
        }
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

export default withRouter(Landing);
