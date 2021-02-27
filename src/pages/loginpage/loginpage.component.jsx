import React from 'react'; 
import Login from '../../components/login/login.component';
import SignUp from '../../components/signup/signup.component';
import './loginpage.styles.scss'


class LoginPage extends React.Component {
    render() {
                return(
                    <div className='login'>
                        <Login/>
                        <SignUp/>
                    </div>
                ) 
            }
}
export default(LoginPage);