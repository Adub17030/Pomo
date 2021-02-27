import React from 'react';
import FormInput from '../form-input/form-input.component';
import { SignInContainer,ButtonsContainer,CustomButtonContainer } from './login.styles';


class Login extends React.Component {

  render() {
    return (
      <SignInContainer>
        <h1>Login</h1>
        <form>
        <label>
          Username 
          <FormInput
          name='email'
          type='email'
          label='email'
          required
        />
        </label>
        <label>
        Password
        <FormInput
            name='password'
            type='password'
            label='password'
            required
          />
        </label>
          <ButtonsContainer>
          <CustomButtonContainer type='submit'  onClick = {this.handleSubmit}>
            Log In 
            </CustomButtonContainer>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default Login;