import React from 'react';
import { Field, reduxForm } from 'redux-form';

const TaskForm = (props) => {
    const option = [
        { newTasks: 'new' },
        { inprogressTasks: 'inprogress' },
        { completedTasks: 'completed' }
    ].map( el => {
        const key = Object.keys(el);
        return(
            <option key = { key } value = { key }>
                { el[key] }
            </option>
        )
    });

    return(
        <form onSubmit={ props.handleSubmit }>
            <div className='task__row mng'>
                <i className='mng__item' onClick={ props.handleSubmit } >
                    <img src='./images/save.svg' alt='save' title='Save' />
                </i>
            </div>
            <div className='task__row'>
                <Field
                    component='select'
                    name='currentState'
                    disabled={ !Number(props.form) }
                    onChange={ (e, newState, prevState) => props.fetchStatusChange({
                        taskID: props.initialValues.id,
                        user_id: props.user_id,
                        newState,
                        prevState
                    })} >
                        { option }
                </Field>
            </div>
            <div className='task__row'>
                <Field
                    component='input'
                    type='text'
                    name='title'
                />
            </div>
            <div className='task__row'>
                <Field
                    component='textarea'
                    name='description'
                />
            </div>
        </form>
    )
};

export default reduxForm({
    form:['text'],
    enableReinitialize: true
})(TaskForm);