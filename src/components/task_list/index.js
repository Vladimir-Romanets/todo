import React from 'react';
import TaskForm from '../task_form';
import './style.css';

export default function TaskList({ title, list, currentState, ...rest }){
    const Li = list.map( (el) =>
        <li className="task" key={ el.id }>
            <TaskForm
                form={ `${el.id}` }
                initialValues={{ ...el, currentState }}
                fetchStatusChange={ rest.fetchStatusChange }
                onSubmit={ ( data ) => rest.fetchSaveTaskData( data ) }
            />
        </li>
    );

    const addIsActive = !list.some( (el) => el.id === currentState );

    return (
        <ul className="dashboard__col">

            <li className="col__title">
                { title || 'Сolumn name' }
            </li>

            <li className="col__add-task"
                title="Add task"
                onClick={ addIsActive ? (e) => rest.addTask(currentState) : null }>
                    <img src="./images/add.svg"
                        alt="Add task"
                        className="add-task__ico"
                    />
            </li>

            { list.length ? Li : null }

        </ul>
    )
};
