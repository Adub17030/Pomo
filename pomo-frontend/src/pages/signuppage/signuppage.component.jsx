import React from 'react'; 
import SignUp from '../../components/signup/signup.component';
import './signuppage.styles.scss'

class SignUpPage extends React.Component {
    render() {
        return(
            <div className='signup'>
                <SignUp/>
            </div>
        ) 
    }
}
export default SignUpPage ;