import React from 'react';
import TaskForm from './task_form';

export default function TaskList({ list, status, userId, ...rest }){

    return (
        <ul className='tasks-list'>
            { 
                list.map( (el) =>
                    <li className='task' key={ el.id }>
                        <TaskForm
                            form={ `${el.id}` }
                            initialValues={{ ...el, status }}
                            userId={ userId }
                            fetchStatusChange={ rest.fetchStatusChange }
                            onSubmit={ (data) => rest.fetchSaveTaskData({...data, userId}) }
                        />
                    </li>
                )
            }
        </ul>
    )
};
