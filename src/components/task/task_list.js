import React from 'react';
import TaskForm from './task_form';

export default function TaskList({list, currentState, ...rest }){

    return (
        <ul className='tasks-list'>
            { 
                list.map( (el) =>
                    <li className='task' key={ el.id }>
                        <TaskForm
                            form={ `${el.id}` }
                            initialValues={{ ...el, currentState }}
                            fetchStatusChange={ rest.fetchStatusChange }
                            onSubmit={ (data) => rest.fetchSaveTaskData(data) }
                        />
                    </li>
                )
            }
        </ul>
    )
};
