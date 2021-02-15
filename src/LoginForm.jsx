import React from 'react';
import './login.css';
import Joi from 'joi-browser';
import {validator} from './validations/validations';

class LoginForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {formFields: {email:'', password:''}, errors:{}}

        this.schema= {
            email: Joi.string().min(10).required().label('Email'),
            password: Joi.string().required().label('Password')
        };
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        const validatorError = validator(this.schema,this.state.formFields)
        this.setState({errors:validatorError});
    }

    handleChange = ({target}) =>{
        const {formFields} = this.state;
        formFields[target.name] = target.value;
        console.log(formFields)
        // this.setState({formField});
        console.log(this.state)
    }

    render() {
        const {email, password} = this.state.formFields;
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>login form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={this.handleChange}/>
                        {this.state.errors['email'] && <small className="error">{this.state.errors['email']}</small>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={this.handleChange} value={password}/>
                    </div>
                    <button type="submit">Log in </button>
                </form>


            </React.Fragment>
        )
    }
}

export default LoginForm;