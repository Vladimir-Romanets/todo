import React from 'react';
import { Field, reduxForm } from 'redux-form';

let AuthorizationForm = ( props ) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit } className="auth-form">

            <div>
                <label htmlFor="login">Login</label>
                <Field
                    component="input"
                    type="text"
                    name="login"
                    id="login"
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <Field
                    component="input"
                    type="password"
                    name="password"
                    id="password"
                />
            </div>
            <div>
                <button type="submit">Sign in</button>
            </div>
        </form>
    )
};

AuthorizationForm = reduxForm({ form: 'authorization' })( AuthorizationForm );

export default AuthorizationForm;