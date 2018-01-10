import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './style.css';

let AuthorizationForm = ( props ) => {
    const { handleSubmit, parentClass } = props;
    return (
        <form onSubmit={ handleSubmit } className={ `auth-form ${parentClass}` } >

            <div className='auth-form__row'>
                <Field
                    component='input'
                    type='text'
                    name='login'
                    id='login'
                    required
                />
                <label htmlFor='login'>Login</label>
            </div>

            <div className='auth-form__row'>
                <Field
                    component='input'
                    type='password'
                    name='password'
                    id='password'
                    required
                />
                <label htmlFor='password'>Password</label>
            </div>

            <div className='auth-form__row'>
                <button type='submit'>Sign in</button>
            </div>

        </form>
    )
};

AuthorizationForm = reduxForm({ form: 'authorization' })( AuthorizationForm );

export default AuthorizationForm;