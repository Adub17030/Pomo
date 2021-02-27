import React from 'react';
// import FormInput from '../form-input/form-input.component';
import {
    SignUpContainer,
    ButtonsContainer,
    CustomButtonContainer,
    GroupContainer,
    FormInputContainer,
    FormInputLabel,
} from './signup.styles';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        try {
            const user = await auth.createUserWithEmailAndPassword(
                username,
                password
            );
            //console.log('uid', user.uid);

            await createUserProfileDocument(username, password);
            this.setState({
                username: '',
                password: '',
            });
        } catch (error) {
            alert(error);
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { username, password, role } = this.state;
        return (
            <SignUpContainer>
                <h1>Sign Up</h1>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    Role
                    <GroupContainer>
                        <FormInputLabel />
                        <div class="control">
                            <label class="radio">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Teacher"
                                    onClick={this.handleChange}
                                />
                                Teacher
                            </label>
                            <label class="radio">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Student"
                                    onClick={this.handleChange}
                                />
                                Student
                            </label>
                        </div>
                    </GroupContainer>
                    Username
                    <GroupContainer>
                        <FormInputLabel />
                        <FormInputContainer
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                            label="Username"
                            required
                        />
                        <FormInputLabel />
                        Password
                    </GroupContainer>
                    <GroupContainer>
                        <FormInputLabel />
                        <FormInputContainer
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            label="Password"
                        />
                    </GroupContainer>
                    <FormInputLabel />
                    <ButtonsContainer>
                        <CustomButtonContainer type="submit">
                            Sign Up
                        </CustomButtonContainer>
                    </ButtonsContainer>
                </form>
            </SignUpContainer>
        );
    }
}

export default SignUp;
