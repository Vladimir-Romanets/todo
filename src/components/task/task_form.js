import React from 'react';
import { Field, reduxForm } from 'redux-form';

const TaskForm = (props) => {
    const option = ['recent', 'inprogress','completed'].map( el => (
        <option key = { el } value = { el }>
            { el }
        </option>
    ));

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
                    name='status'
                    disabled={ !Number(props.form) }
                    onChange={ (e, newState, prevState) => props.fetchStatusChange({
                        id: props.initialValues.id,
                        userId: props.userId,
                        status: newState,
                        prevStatus: prevState
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