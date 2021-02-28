import React from 'react'; 
import Login from '../../components/login/login.component';


class LoginPage extends React.Component {
    render() {
    return(
            <div className='login'>
                <Login props={this.props}/>
            </div>
        ) 
    }
}
export default(LoginPage);