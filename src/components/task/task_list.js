import React from 'react';
import TaskForm from './task_form';

export default function TaskList({list, currentState, user_id, ...rest }){

    return (
        <ul className='tasks-list'>
            { 
                list.map( (el) =>
                    <li className='task' key={ el.id }>
                        <TaskForm
                            form={ `${el.id}` }
                            initialValues={{ ...el, currentState }}
                            user_id={ user_id }
                            fetchStatusChange={ rest.fetchStatusChange }
                            onSubmit={ (data) => rest.fetchSaveTaskData({...data, user_id}) }
                        />
                    </li>
                )
            }
        </ul>
    )
};
