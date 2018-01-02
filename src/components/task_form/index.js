import React, { Component } from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';

import './style.css';

const TaskForm = (props) => {
    const option = ['newtasks', 'inprogress', 'completed'].map( (el) => 
        <option
            key = { el }
            value = { el }>
                { el }
        </option>
    );

    return(
        <form onSubmit={ props.handleSubmit }>
            <div className="task__row mng">
                <i className="mng__item" onClick={ props.handleSubmit } >
                    <img src="./images/save.svg" alt="save" title="Save" />
                </i>
            </div>
            <div className="task__row">
                <Field
                    component="select"
                    name="currentState"
                    disabled={ !Number(props.form) }
                    onChange={ (e, newState, prevState) => props.fetchStatusChange({
                        taskID: props.initialValues.id,
                        newState,
                        prevState
                    })} >
                        { option }
                </Field>
            </div>
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
    form:['text'],
    enableReinitialize: true
})(TaskForm);