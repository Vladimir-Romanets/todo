import React, { Component } from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';

import './style.css';

const TaskForm = ({ handleSubmit }) => {
    return(
        <form onSubmit={ handleSubmit }>
            <div className="task__row">
                <Field
                    component="input"
                    type="text"
                    name="title"
                />
            </div>
            <div className="task__row">
                <Field
                    component="textarea"
                    name="description"
                />
            </div>
        </form>
    )
};

export default reduxForm({
    form:['text']
})(TaskForm);