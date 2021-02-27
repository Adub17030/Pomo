import React from 'react';
import FormInput from '../form-input/form-input.component';
import { SignInContainer,ButtonsContainer,CustomButtonContainer } from './signup.styles';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', 
      password: ''
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault(); 
    const {username, passsword} = this.state; 
    try {
        const user = await auth.createUserWithEmailAndPassword('cariny@gmail.com', '123456'); 
        await createUserProfileDocument(user);
    } catch(error) {
        alert(error); 
    } 
  }

  handleChange = event => {
    const {name, value} = event.target;
    console.log(name, value);
    this.setState({[name]: value}); 
  }

  render() {
    const {username, password} = this.state;
    console.log(username, password);
    return (
      <SignInContainer>
        <h1>SignUp</h1>
        <form onSubmit = {this.handleSubmit, this.handleSubmit2}>
        <label>
          Username 
          <FormInput
          name='email'
          type='email'
          value = {username}
          onChange = {this.handleChange}
          required
        />
        </label>
        <label>
        Password
        <FormInput
            name='password'
            type='password'
            required
            value = {password}
            onChange = {this.handleChange}
          />
        </label>
          <ButtonsContainer>
            <CustomButtonContainer type='submit' onClick = {this.handleSubmit}>
            Sign Up
            </CustomButtonContainer>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignUp;