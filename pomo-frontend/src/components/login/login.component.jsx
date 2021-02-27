import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { SignInContainer,ButtonsContainer,CustomButtonContainer,GroupContainer,
FormInputContainer,FormInputLabel } from './login.styles';


class Login extends React.Component {
    constructor() {
      super(); 
      this.state = {
          username: '',
          password: ''
      }
    }

    handleSubmit = async event => {
    event.preventDefault(); 
    const {username,password} = this.state; 
    try {
        await auth.signInWithEmailAndPassword(username, password); 
        alert('Login Successful')
        this.setState({
            username: '',
            password: '', 
        });
    } catch(error) {
        alert(error); 
    } 

  }

  handleChange = event => {
      const {name, value} = event.target;
      this.setState({[name]: value}); 
  }

  render() {
      const {username, password} = this.state;
      return (
          <SignInContainer >
          <h1>Log In</h1>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
              Username
              <GroupContainer>
              <FormInputLabel/>
              <FormInputContainer type='text'
                name='username'
                label='Username'
                value={username}
                onChange={this.handleChange}
                required/>
              <FormInputLabel/>
              Password
              </GroupContainer>
              <GroupContainer>
              <FormInputLabel/>
              <FormInputContainer
                type='password'
                name='password'
                label='Password'
                value={password}
                onChange={this.handleChange}
                required
              />
              </GroupContainer>
              <FormInputLabel/>
              <ButtonsContainer>
            <CustomButtonContainer type='submit'>
              Log In
            </CustomButtonContainer>
          </ButtonsContainer>
          </form>
          </SignInContainer>
      )
  }
}

export default Login;