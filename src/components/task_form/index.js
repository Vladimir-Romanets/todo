import React, { Component } from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';

const TaskForm = ({ handleSubmit }) => {
    return(
        <form onSubmit={ handleSubmit }>
            <div>
                <Field
                    component="input"
                    type="text"
                    name="title"
                />
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